(function() {
    'use strict';
    
    // Configuration
    const config = {
        snowflakeCount: 80,
        minSize: 1,
        maxSize: 3,
        minSpeed: 0.3,
        maxSpeed: 1.2,
        minRotationSpeed: 0.5,
        maxRotationSpeed: 2,
        windStrength: 0.3,
        windSpeedMin: 0.1,
        windSpeedMax: 0.8,
        windDirectionChangeSpeed: 0.0005,
        windSpeedChangeSpeed: 0.0008,
        headerSelector: 'header'
    };
    
    // Get header element
    const header = document.querySelector(config.headerSelector);
    if (!header) return;
    
    // Create snow container
    const snowContainer = document.createElement('div');
    snowContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
        z-index: 0;
    `;
    
    // Make header position relative if it isn't already
    const headerPosition = window.getComputedStyle(header).position;
    if (headerPosition === 'static') {
        header.style.position = 'relative';
    }
    
    header.appendChild(snowContainer);
    
    // Wind system - modulates direction and speed over time
    const windSystem = {
        direction: Math.random() * Math.PI * 2, // 0 to 2π (full circle)
        speed: (config.windSpeedMin + config.windSpeedMax) / 2,
        directionPhase: Math.random() * Math.PI * 2,
        speedPhase: Math.random() * Math.PI * 2,
        
        update() {
            // Modulate wind direction (changes over time)
            this.directionPhase += config.windDirectionChangeSpeed;
            this.direction = Math.sin(this.directionPhase) * Math.PI; // -π to π (left to right)
            
            // Modulate wind speed (changes over time)
            this.speedPhase += config.windSpeedChangeSpeed;
            const speedVariation = (Math.sin(this.speedPhase) + 1) / 2; // 0 to 1
            this.speed = config.windSpeedMin + (config.windSpeedMax - config.windSpeedMin) * speedVariation;
        },
        
        getWindX() {
            // Convert direction to horizontal component
            return Math.sin(this.direction) * this.speed;
        },
        
        getWindDirection() {
            // Return wind direction in degrees (0-360)
            // Convert from radians (-π to π) to degrees (0-360)
            let degrees = (this.direction * 180 / Math.PI);
            if (degrees < 0) degrees += 360;
            return degrees;
        }
    };
    
    // Snowflake class
    class Snowflake {
        constructor() {
            this.reset();
            this.element = this.createElement();
            snowContainer.appendChild(this.element);
        }
        
        createElement() {
            const flake = document.createElement('div');
            // Create oval shape using CSS
            flake.style.cssText = `
                position: absolute;
                width: ${this.width}px;
                height: ${this.height}px;
                background: rgba(255, 255, 255, 0.9);
                border-radius: 50%;
                box-shadow: 0 0 2px rgba(255, 255, 255, 0.8), 0 0 4px rgba(255, 255, 255, 0.5);
                user-select: none;
                pointer-events: none;
            `;
            return flake;
        }
        
        reset() {
            // Random starting position
            this.x = Math.random() * window.innerWidth;
            this.y = -10 - Math.random() * 20;
            
            // Random properties
            this.size = config.minSize + Math.random() * (config.maxSize - config.minSize);
            this.speed = config.minSpeed + Math.random() * (config.maxSpeed - config.minSpeed);
            this.rotation = Math.random() * 360;
            this.rotationSpeed = (Math.random() > 0.5 ? 1 : -1) * 
                (config.minRotationSpeed + Math.random() * (config.maxRotationSpeed - config.minRotationSpeed));
            
            // Oval dimensions (width and height for oval shape)
            // Make some more circular, some more oval
            const isOval = Math.random() > 0.3; // 70% chance of being oval
            if (isOval) {
                this.width = this.size;
                this.height = this.size * (0.5 + Math.random() * 0.5); // 50-100% of width
            } else {
                // More circular
                this.width = this.size;
                this.height = this.size * (0.8 + Math.random() * 0.2); // 80-100% of width
            }
            
            // Individual wind sensitivity (small variation so all flakes follow same direction)
            this.windSensitivity = 0.85 + Math.random() * 0.15; // 0.85 to 1.0 (more consistent)
            
            // Oscillation for subtle natural movement (much smaller, aligned with wind)
            this.oscillation = Math.random() * Math.PI * 2;
            this.oscillationSpeed = 0.01 + Math.random() * 0.02;
            this.oscillationAmplitude = 0.1 + Math.random() * 0.2; // Reduced from 0.5-1.5 to 0.1-0.3
            
            // Brownian motion / turbulence properties
            this.turbulenceX = 0; // Current turbulence velocity X
            this.turbulenceY = 0; // Current turbulence velocity Y
            this.turbulencePhase1 = Math.random() * Math.PI * 2;
            this.turbulencePhase2 = Math.random() * Math.PI * 2;
            this.turbulencePhase3 = Math.random() * Math.PI * 2;
            this.turbulenceSpeed1 = 0.02 + Math.random() * 0.03; // Fast turbulence
            this.turbulenceSpeed2 = 0.005 + Math.random() * 0.01; // Slow turbulence
            this.turbulenceSpeed3 = 0.001 + Math.random() * 0.002; // Very slow turbulence
            this.turbulenceAmplitude1 = 0.3 + Math.random() * 0.4; // Small random kicks
            this.turbulenceAmplitude2 = 0.5 + Math.random() * 0.5; // Medium turbulence
            this.turbulenceAmplitude3 = 0.2 + Math.random() * 0.3; // Large scale drift
            
            // Random walk component for Brownian motion
            this.randomWalkX = (Math.random() - 0.5) * 0.1;
            this.randomWalkY = (Math.random() - 0.5) * 0.05;
            this.randomWalkCounter = 0;
        }
        
        update() {
            // Update turbulence phases (multiple frequencies for Brownian-like motion)
            this.turbulencePhase1 += this.turbulenceSpeed1;
            this.turbulencePhase2 += this.turbulenceSpeed2;
            this.turbulencePhase3 += this.turbulenceSpeed3;
            
            // Calculate turbulence velocities (multiple sine waves for complex motion)
            const turb1X = Math.sin(this.turbulencePhase1) * this.turbulenceAmplitude1;
            const turb1Y = Math.cos(this.turbulencePhase1 * 1.3) * this.turbulenceAmplitude1 * 0.5;
            const turb2X = Math.sin(this.turbulencePhase2) * this.turbulenceAmplitude2;
            const turb2Y = Math.cos(this.turbulencePhase2 * 0.7) * this.turbulenceAmplitude2 * 0.3;
            const turb3X = Math.sin(this.turbulencePhase3) * this.turbulenceAmplitude3;
            const turb3Y = Math.cos(this.turbulencePhase3 * 0.5) * this.turbulenceAmplitude3 * 0.2;
            
            // Combine turbulence layers
            this.turbulenceX = turb1X + turb2X + turb3X;
            this.turbulenceY = turb1Y + turb2Y + turb3Y;
            
            // Random walk component (Brownian motion)
            this.randomWalkCounter++;
            if (this.randomWalkCounter > 10 + Math.random() * 20) {
                // Randomly change direction (like particle collisions)
                this.randomWalkX += (Math.random() - 0.5) * 0.2;
                this.randomWalkY += (Math.random() - 0.5) * 0.1;
                // Damping to prevent infinite acceleration
                this.randomWalkX *= 0.95;
                this.randomWalkY *= 0.95;
                this.randomWalkCounter = 0;
            }
            
            // Get current global wind (dominant force)
            const globalWindX = windSystem.getWindX();
            const windDirection = windSystem.getWindDirection();
            
            // Horizontal drift: combine wind, oscillation, turbulence, and random walk
            this.oscillation += this.oscillationSpeed;
            const windEffect = globalWindX * this.windSensitivity;
            
            // Oscillation should be subtle and not oppose wind direction
            const oscillationSign = globalWindX >= 0 ? 1 : -1;
            const oscillationEffect = Math.sin(this.oscillation) * this.oscillationAmplitude * oscillationSign * 0.3;
            
            // Combine all horizontal forces
            this.x += windEffect + oscillationEffect + this.turbulenceX + this.randomWalkX;
            
            // Vertical movement: base speed + turbulence + random walk
            this.y += this.speed + this.turbulenceY + this.randomWalkY;
            
            // Rotate oval according to wind direction with turbulence
            const baseRotation = windDirection;
            const rotationVariation = Math.sin(this.oscillation * 2) * 15; // ±15 degrees variation
            const turbulenceRotation = this.turbulenceX * 5; // Turbulence affects rotation
            this.rotation = baseRotation + rotationVariation + turbulenceRotation;
            
            // Check if snowflake is out of bounds
            const headerRect = header.getBoundingClientRect();
            if (this.y > headerRect.height + 20) {
                const oldWidth = this.width;
                const oldHeight = this.height;
                this.reset();
                this.y = -10;
                // Update element size if dimensions changed
                if (this.width !== oldWidth || this.height !== oldHeight) {
                    this.element.style.width = `${this.width}px`;
                    this.element.style.height = `${this.height}px`;
                }
            }
            
            // Wrap horizontally if needed
            if (this.x < -20) {
                this.x = window.innerWidth + 20;
            } else if (this.x > window.innerWidth + 20) {
                this.x = -20;
            }
            
            // Update element position and rotation
            this.element.style.left = `${this.x}px`;
            this.element.style.top = `${this.y}px`;
            this.element.style.transform = `rotate(${this.rotation}deg)`;
        }
        
        remove() {
            if (this.element && this.element.parentNode) {
                this.element.parentNode.removeChild(this.element);
            }
        }
    }
    
    // Create snowflakes
    const snowflakes = [];
    for (let i = 0; i < config.snowflakeCount; i++) {
        const flake = new Snowflake();
        // Stagger initial positions
        flake.y = -10 - Math.random() * (header.getBoundingClientRect().height + 100);
        snowflakes.push(flake);
    }
    
    // Animation loop
    let lastTime = performance.now();
    let animationFrameId;
    
    function animate(currentTime) {
        const deltaTime = currentTime - lastTime;
        lastTime = currentTime;
        
        // Update wind system (modulates direction and speed)
        windSystem.update();
        
        // Update all snowflakes
        snowflakes.forEach(flake => {
            flake.update();
        });
        
        animationFrameId = requestAnimationFrame(animate);
    }
    
    // Start animation
    animate(performance.now());
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Reset snowflakes that are out of bounds
            snowflakes.forEach(flake => {
                if (flake.x > window.innerWidth || flake.x < 0) {
                    flake.x = Math.random() * window.innerWidth;
                }
            });
        }, 250);
    });
    
    // Cleanup function (optional, for if you need to stop the snow)
    window.stopSnow = function() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        snowflakes.forEach(flake => flake.remove());
        if (snowContainer && snowContainer.parentNode) {
            snowContainer.parentNode.removeChild(snowContainer);
        }
    };
})();

