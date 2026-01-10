(function() {
    'use strict';
    
    // Animal emojis (side-view) with scale factors, speed values, and wiggle rates
    // Scale: 1.0 = base size, larger numbers = bigger animals, smaller = smaller animals
    // Speed: base speed multiplier (will be varied slightly per animal instance)
    // Wiggle: wiggle rate (rotation speed) - higher = faster wiggle
    const sideViewAnimals = [
        { emoji: "🐘", scale: 1.5, speed: 0.3, wiggle: 0.02 }, // Elephant - reduced from 2.5
        { emoji: "🦒", scale: 1.6, speed: 0.4, wiggle: 0.025 }, // Giraffe - reduced from 2.8
        { emoji: "🦘", scale: 1.3, speed: 1.2, wiggle: 0.08 }, // Kangaroo - reduced from 1.8
        { emoji: "🐫", scale: 1.4, speed: 0.5, wiggle: 0.03 }, // Two-hump camel - reduced from 2.0
        { emoji: "🐪", scale: 1.4, speed: 0.5, wiggle: 0.03 }, // One-hump camel - reduced from 2.0
        { emoji: "🦏", scale: 1.5, speed: 0.4, wiggle: 0.02 }, // Rhinoceros - reduced from 2.3
        { emoji: "🐎", scale: 1.3, speed: 1.5, wiggle: 0.1 }, // Horse - reduced from 1.8
        { emoji: "🐖", scale: 1.1, speed: 0.6, wiggle: 0.04 }, // Pig - kept similar
        { emoji: "🦛", scale: 1.5, speed: 0.3, wiggle: 0.015 }, // Hippopotamus - reduced from 2.2
        { emoji: "🐗", scale: 1.1, speed: 0.7, wiggle: 0.05 }, // Boar - kept similar
        { emoji: "🐃", scale: 1.3, speed: 0.5, wiggle: 0.03 }, // Water buffalo - reduced from 1.8
        { emoji: "🦌", scale: 1.2, speed: 1.0, wiggle: 0.07 }, // Deer - reduced from 1.5
        { emoji: "🦙", scale: 1.2, speed: 0.6, wiggle: 0.04 }, // Llama - reduced from 1.6
        { emoji: "🐕‍🦺", scale: 1.0, speed: 0.8, wiggle: 0.06 }, // Service dog - kept
        { emoji: "🐧", scale: 0.95, speed: 0.4, wiggle: 0.025 }, // Penguin - increased from 0.8
        { emoji: "🦩", scale: 1.1, speed: 0.5, wiggle: 0.03 }, // Flamingo - kept
        { emoji: "🦤", scale: 1.0, speed: 0.3, wiggle: 0.015 }, // Dodo - kept
        { emoji: "🦃", scale: 1.0, speed: 0.5, wiggle: 0.03 }, // Turkey - increased from 0.9
        { emoji: "🦚", scale: 1.0, speed: 0.4, wiggle: 0.025 }, // Peacock - kept
        { emoji: "🐋", scale: 1.6, speed: 0.6, wiggle: 0.03 }, // Whale - reduced from 3.0
        { emoji: "🐬", scale: 1.2, speed: 1.3, wiggle: 0.09 }, // Dolphin - reduced from 1.5
        { emoji: "🦭", scale: 1.15, speed: 0.7, wiggle: 0.05 }, // Seal - reduced from 1.3
        { emoji: "🐟", scale: 0.8, speed: 0.9, wiggle: 0.07 }, // Fish - increased from 0.5
        { emoji: "🐠", scale: 0.75, speed: 0.8, wiggle: 0.06 }, // Tropical fish - increased from 0.4
        { emoji: "🐡", scale: 0.85, speed: 0.5, wiggle: 0.03 }, // Blowfish - increased from 0.6
        { emoji: "🦈", scale: 1.3, speed: 1.4, wiggle: 0.08 }, // Shark - reduced from 1.8
        { emoji: "🐙", scale: 1.0, speed: 0.6, wiggle: 0.05 }, // Octopus - kept
        { emoji: "🦑", scale: 1.1, speed: 0.8, wiggle: 0.06 }, // Squid - reduced from 1.2
        { emoji: "🐊", scale: 1.4, speed: 0.5, wiggle: 0.03 }, // Crocodile - reduced from 2.0
        { emoji: "🐍", scale: 1.0, speed: 0.7, wiggle: 0.04 }, // Snake - increased from 0.9
        { emoji: "🦎", scale: 0.85, speed: 0.8, wiggle: 0.06 }, // Lizard - increased from 0.6
        { emoji: "🐢", scale: 0.9, speed: 0.2, wiggle: 0.01 }, // Turtle - increased from 0.7
        { emoji: "🦋", scale: 0.7, speed: 1.0, wiggle: 0.12 }, // Butterfly - increased from 0.3
        { emoji: "🐞", scale: 0.65, speed: 0.6, wiggle: 0.04 }, // Ladybug - increased from 0.2
        { emoji: "🐜", scale: 0.65, speed: 0.7, wiggle: 0.05 }, // Ant - increased from 0.2
        { emoji: "🪲", scale: 0.7, speed: 0.5, wiggle: 0.03 }, // Beetle - increased from 0.3
        { emoji: "🦗", scale: 0.65, speed: 0.9, wiggle: 0.08 }, // Cricket - increased from 0.2
        { emoji: "🐕", scale: 1.0, speed: 0.9, wiggle: 0.07 }, // Dog - kept
        { emoji: "🐩", scale: 0.95, speed: 0.7, wiggle: 0.05 }, // Poodle - increased from 0.8
        { emoji: "🦮", scale: 1.0, speed: 0.8, wiggle: 0.06 }, // Guide dog - kept
        { emoji: "🐈", scale: 0.9, speed: 0.9, wiggle: 0.07 }, // Cat - increased from 0.7
        { emoji: "🐈‍⬛", scale: 0.9, speed: 0.9, wiggle: 0.07 }, // Black cat - increased from 0.7
        { emoji: "🐇", scale: 0.85, speed: 1.1, wiggle: 0.09 }, // Rabbit - increased from 0.6
        { emoji: "🐿️", scale: 0.75, speed: 1.0, wiggle: 0.08 }, // Chipmunk - increased from 0.4
        { emoji: "🐁", scale: 0.7, speed: 0.8, wiggle: 0.06 }, // Mouse - increased from 0.3
        { emoji: "🐀", scale: 0.75, speed: 0.8, wiggle: 0.06 }, // Rat - increased from 0.4
        { emoji: "🐑", scale: 1.1, speed: 0.6, wiggle: 0.04 }, // Sheep - kept
        { emoji: "🐏", scale: 1.15, speed: 0.7, wiggle: 0.05 }  // Ram - reduced from 1.2
    ];
    
    // Configuration
    const config = {
        minAnimalCount: 1, // Minimum number of animals on screen
        maxAnimalCount: 3, // Maximum number of animals on screen
        baseSpeedMultiplier: 0.1, // Base speed multiplier (will be multiplied by animal's speed value)
        speedVariation: 0.2, // Variation factor (20% variation from base speed)
        minSpawnDelay: 300, // Minimum time between spawns (ms) - much faster
        maxSpawnDelay: 1000, // Maximum time between spawns (ms) - much faster
        spawnAnimationDuration: 500, // Duration of pop-up animation (ms)
        baseSize: 30, // Base size in pixels (will be multiplied by scale)
        jumpProbability: 0.7, // 70% chance to jump
        jumpHeight: 15, // Pixels to jump
        jumpDuration: 400, // Jump animation duration (ms)
        footerSelector: 'footer',
        debugMode: false // Set to true to spawn all animals for size comparison
    };
    
    // Get footer element
    const footer = document.querySelector(config.footerSelector);
    if (!footer) {
        console.warn('Animal.js: Footer element not found');
        return;
    }
    
    // Create animal container
    const animalContainer = document.createElement('div');
    animalContainer.id = 'animal-container';
    animalContainer.style.cssText = `
        position: fixed;
        left: 0;
        width: 100%;
        height: 60px;
        pointer-events: none;
        overflow: visible;
        z-index: 1;
    `;
    
    // Function to update container position (above footer)
    const updateContainerPosition = () => {
        const footerRect = footer.getBoundingClientRect();
        const scrollY = window.scrollY || window.pageYOffset;
        // Position container above footer (60px height for animals)
        animalContainer.style.top = `${footerRect.top + scrollY - 60}px`;
    };
    
    // Append to body
    document.body.appendChild(animalContainer);
    
    // Update position initially and on resize/scroll
    updateContainerPosition();
    let resizeTimeout;
    const resizeHandler = () => {
        updateContainerPosition();
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Reset animals that are out of bounds
            animals.forEach(animal => {
                // Recalculate Y position based on new container position
                animal.updateYPosition();
                if (animal.x > window.innerWidth + 100 || animal.x < -100) {
                    animal.reset();
                }
            });
        }, 250);
    };
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('scroll', updateContainerPosition);
    
    // Animal class
    class Animal {
        constructor() {
            this.reset();
            this.element = this.createElement();
            animalContainer.appendChild(this.element);
        }
        
        createElement() {
            const animal = document.createElement('div');
            // Apply random hue filter for fun color variation
            const hue = this.hue || Math.random() * 360;
            animal.style.cssText = `
                position: absolute;
                font-size: ${this.size}px;
                line-height: 1;
                user-select: none;
                pointer-events: auto;
                cursor: pointer;
                will-change: transform, left, top;
                transform-origin: center bottom; /* Rotate around bottom center for consistent ground alignment */
                filter: hue-rotate(${hue}deg);
            `;
            animal.textContent = this.emoji;
            
            // Add click/tap event listener
            animal.addEventListener('click', () => this.handleClick());
            animal.addEventListener('touchstart', (e) => {
                e.preventDefault(); // Prevent double-tap zoom
                this.handleClick();
            });
            
            return animal;
        }
        
        reset() {
            // Random direction (left to right or right to left)
            this.direction = Math.random() > 0.5 ? 1 : -1; // 1 = right, -1 = left
            
            // Spawn at random position along the footer width (using viewport width)
            // Spawn anywhere from 5% to 95% of viewport width
            const minX = window.innerWidth * 0.05;
            const maxX = window.innerWidth * 0.95;
            this.x = minX + Math.random() * (maxX - minX);
            
            // Random properties (calculate size first, then use it for positioning)
            const animalData = sideViewAnimals[Math.floor(Math.random() * sideViewAnimals.length)];
            this.emoji = animalData.emoji;
            this.scale = animalData.scale;
            // Size is base size multiplied by the animal's scale factor
            this.size = config.baseSize * this.scale;
            // Speed is based on animal's speed value with variation
            const baseSpeed = (animalData.speed || 0.5) * config.baseSpeedMultiplier;
            const variation = (Math.random() * 2 - 1) * config.speedVariation; // -0.2 to +0.2
            this.speed = baseSpeed * (1 + variation);
            
            // Jump properties - based on animal speed (faster animals jump more frequently)
            this.isJumping = false;
            this.jumpCounter = 0;
            // Faster animals jump more often, slower animals jump less often
            // Base interval: 2000ms, adjusted by speed (faster = shorter interval)
            const normalizedSpeed = this.speed / config.baseSpeedMultiplier;
            const speedFactor = 1 / normalizedSpeed; // Inverse of normalized speed
            const baseInterval = 2000 * speedFactor; // Slower animals have longer intervals
            this.jumpInterval = baseInterval * (0.8 + Math.random() * 0.4); // 20% variation
            this.jumpTimer = 0;
            
            // Random hue for fun color variation
            this.hue = Math.random() * 360; // Random hue from 0-360 degrees
            
            // Wiggle properties - use animal's wiggle value from array
            this.wigglePhase = Math.random() * Math.PI * 2; // Random starting phase
            this.wiggleSpeed = (animalData.wiggle || 0.05) * (0.8 + Math.random() * 0.4); // Use animal's wiggle value with 20% variation
            this.wiggleAmount = 8 + Math.random() * 4; // Wiggle amplitude (degrees of rotation)
            this.wiggleRotation = 0; // Current wiggle rotation
            
            // High jump properties (for tap interaction)
            this.isHighJumping = false;
            this.highJumpCounter = 0;
            this.highJumpWithRotation = false; // 30% chance to rotate during high jump
            this.highJumpRotation = 0; // Current rotation angle during high jump
            
            // Speed boost properties (for tap interaction)
            this.speedBoost = 1.0; // Speed multiplier (1.0 = normal, 8.0 = 8x speed)
            
            // Spawn animation properties (bouncy pop-up)
            this.isSpawning = true;
            this.spawnCounter = 0;
            this.spawnScale = 0; // Start at 0 size
            
            // CRITICAL FIX: Calculate Y position so all animals stand on the same baseline
            // The container is 60px high, we want animals to appear to stand on the bottom edge
            this.updateYPosition();
            
            // Update element size and hue if it exists
            if (this.element) {
                this.element.style.fontSize = `${this.size}px`;
                this.element.textContent = this.emoji;
                this.element.style.filter = `hue-rotate(${this.hue}deg)`;
            }
        }
        
        updateYPosition() {
            // Position animals at the bottom of the container (which is above footer)
            // Container height = 60px
            const containerHeight = 60;
            // For emoji, we'll position them at the bottom of the container
            this.y = containerHeight - this.size * 1.35; // Adjust this factor for different emoji "feet" position (increased from 0.7 to make them higher)
        }
        
        update(deltaTime) {
            // Update spawn animation (bouncy pop-up from 0 to actual size)
            if (this.isSpawning) {
                this.spawnCounter += deltaTime;
                const spawnProgress = Math.min(this.spawnCounter / config.spawnAnimationDuration, 1);
                
                // Bouncy ease-out animation (using cubic-bezier-like easing)
                // This creates a bouncy pop-up effect
                let easedProgress;
                if (spawnProgress < 0.7) {
                    // First 70%: quick scale up
                    easedProgress = (spawnProgress / 0.7) * 1.1; // Overshoot to 1.1
                } else {
                    // Last 30%: bounce back to 1.0
                    const bounceProgress = (spawnProgress - 0.7) / 0.3;
                    easedProgress = 1.1 - (bounceProgress * bounceProgress * 0.1); // Bounce back
                }
                
                this.spawnScale = Math.min(easedProgress, 1.0);
                
                // End spawn animation
                if (spawnProgress >= 1) {
                    this.isSpawning = false;
                    this.spawnCounter = 0;
                    this.spawnScale = 1.0;
                }
            }
            
            // Update jump timer
            this.jumpTimer += deltaTime;
            
            // Check if it's time to jump (more frequent jumps)
            if (!this.isJumping && this.jumpTimer >= this.jumpInterval) {
                if (Math.random() < config.jumpProbability) {
                    this.jump();
                }
                this.jumpTimer = 0;
                // Reset interval based on speed (with variation)
                const normalizedSpeed = this.speed / config.baseSpeedMultiplier;
                const speedFactor = 1 / normalizedSpeed;
                const baseInterval = 2000 * speedFactor;
                this.jumpInterval = baseInterval * (0.8 + Math.random() * 0.4); // 20% variation
            }
            
            // Update high jump animation (takes priority over normal jump)
            if (this.isHighJumping) {
                this.highJumpCounter += deltaTime;
                const highJumpDuration = 2000; // 2 seconds for high jump
                const jumpProgress = Math.min(this.highJumpCounter / highJumpDuration, 1);
                
                // Very very very high jump curve with stronger gravity (asymmetric: slow up, fast down)
                const highJumpHeight = config.jumpHeight * 8; // 8x higher than normal jump (very very very high)
                let jumpOffset;
                if (jumpProgress < 0.4) {
                    // Ascent: slower (40% of time to reach peak)
                    const ascentProgress = jumpProgress / 0.4;
                    jumpOffset = Math.sin(ascentProgress * Math.PI / 2) * highJumpHeight;
                } else {
                    // Descent: faster with stronger gravity (60% of time to fall)
                    const descentProgress = (jumpProgress - 0.4) / 0.6;
                    // Use quadratic curve for faster fall (stronger gravity)
                    jumpOffset = highJumpHeight * (1 - descentProgress * descentProgress);
                }
                this.jumpY = -jumpOffset;
                
                // 30% chance: self-rotate during jump (one full rotation)
                if (this.highJumpWithRotation) {
                    this.highJumpRotation = jumpProgress * 360; // One full rotation (360 degrees)
                }
                
                // End high jump
                if (jumpProgress >= 1) {
                    this.isHighJumping = false;
                    this.highJumpCounter = 0;
                    this.jumpY = 0;
                    this.highJumpRotation = 0;
                    this.highJumpWithRotation = false;
                }
            }
            // Update normal jump animation (only if not high jumping)
            else if (this.isJumping) {
                this.jumpCounter += deltaTime;
                const jumpProgress = Math.min(this.jumpCounter / config.jumpDuration, 1);
                
                // Jump curve with stronger gravity (asymmetric: slow up, fast down)
                let jumpOffset;
                if (jumpProgress < 0.4) {
                    // Ascent: slower (40% of time to reach peak)
                    const ascentProgress = jumpProgress / 0.4;
                    jumpOffset = Math.sin(ascentProgress * Math.PI / 2) * config.jumpHeight;
                } else {
                    // Descent: faster with stronger gravity (60% of time to fall)
                    const descentProgress = (jumpProgress - 0.4) / 0.6;
                    // Use quadratic curve for faster fall (stronger gravity)
                    jumpOffset = config.jumpHeight * (1 - descentProgress * descentProgress);
                }
                this.jumpY = -jumpOffset;
                
                // End jump
                if (jumpProgress >= 1) {
                    this.isJumping = false;
                    this.jumpCounter = 0;
                    this.jumpY = 0;
                }
            } else {
                this.jumpY = 0;
            }
            
            // Wiggle animation while walking (rotation back and forth)
            // Apply speed boost to wiggle speed (8x speed = 8x wiggle)
            this.wigglePhase += this.wiggleSpeed * this.speedBoost;
            this.wiggleRotation = Math.sin(this.wigglePhase) * this.wiggleAmount;
            
            // Move horizontally (only after spawn animation completes)
            // Apply speed boost if active
            if (!this.isSpawning) {
                this.x += this.speed * this.direction * this.speedBoost;
            }
            
            // Check if animal is out of bounds (completely off-screen)
            // Only check after spawn animation is complete
            if (!this.isSpawning) {
                if (this.direction === 1 && this.x > window.innerWidth + 100) {
                    // Gone off right side, reset at random position
                    this.reset();
                } else if (this.direction === -1 && this.x < -100) {
                    // Gone off left side, reset at random position
                    this.reset();
                }
            }
            
            // Update element position
            this.element.style.left = `${this.x}px`;
            this.element.style.top = `${this.y + this.jumpY}px`;
            
            // Flip emoji when going to the right (direction === 1) and apply jump + wiggle transforms
            let transform = '';
            
            // Apply spawn scale animation (bouncy pop-up) - takes priority
            if (this.isSpawning && this.spawnScale !== undefined) {
                transform += `scale(${this.spawnScale})`;
            }
            
            if (this.direction === 1) {
                transform += (transform ? ' ' : '') + 'scaleX(-1)';
            }
            
            // During high jump, apply rotation if enabled (30% chance)
            if (this.isHighJumping && this.highJumpWithRotation && this.highJumpRotation !== undefined) {
                transform += (transform ? ' ' : '') + `rotate(${this.highJumpRotation}deg)`;
            }
            // Otherwise apply wiggle (rotation back and forth while walking) - but not during spawn or high jump
            else if (!this.isSpawning && !this.isHighJumping && this.wiggleRotation !== undefined && this.wiggleRotation !== 0) {
                transform += (transform ? ' ' : '') + `rotate(${this.wiggleRotation}deg)`;
            }
            
            // Apply jump (vertical movement)
            if (this.jumpY !== 0) {
                transform += (transform ? ' ' : '') + `translateY(${this.jumpY}px)`;
            }
            this.element.style.transform = transform;
            
            // Update hue filter if it changed (shouldn't, but just in case)
            if (this.hue !== undefined) {
                this.element.style.filter = `hue-rotate(${this.hue}deg)`;
            }
        }
        
        jump() {
            if (!this.isJumping && !this.isHighJumping) {
                this.isJumping = true;
                this.jumpCounter = 0;
            }
        }
        
        handleClick() {
            // 66% chance to flip direction with a small jump, 33% chance to do very high jump (no flips)
            if (Math.random() < 0.66) {
                // Flip direction and jump a bit to make it look natural
                this.direction *= -1;
                // 33% chance to speed up 8 times when flipping
                if (Math.random() < 0.33) {
                    this.speedBoost = 8.0; // 8x speed boost
                }
                // Trigger a normal jump to make the flip look more natural
                if (!this.isJumping && !this.isHighJumping) {
                    this.jump();
                }
            } else {
                // Very very very high jump - only if not already jumping
                if (!this.isHighJumping && !this.isJumping) {
                    this.isHighJumping = true;
                    this.highJumpCounter = 0;
                    // 30% chance to rotate during the jump
                    this.highJumpWithRotation = Math.random() < 0.3;
                    this.highJumpRotation = 0;
                    // Cancel any normal jump
                    this.isJumping = false;
                    this.jumpCounter = 0;
                }
            }
        }
        
        remove() {
            if (this.element && this.element.parentNode) {
                this.element.parentNode.removeChild(this.element);
            }
        }
    }
    
    // Create animals array
    const animals = [];
    
    // Get current animal count target (random between min and max)
    function getAnimalCount() {
        return Math.floor(Math.random() * (config.maxAnimalCount - config.minAnimalCount + 1)) + config.minAnimalCount;
    }
    
    let currentAnimalCount = getAnimalCount();
    let lastSpawnTime = 0;
    let isInitialSpawnComplete = false;
    
    // Simple spawn function - only creates one animal if under limit
    function spawnAnimal(animalIndex = null) {
        // HARD LIMIT: Never exceed maxAnimalCount (3)
        if (animals.length >= config.maxAnimalCount) {
            return; // Don't spawn if at max
        }
        
        if (config.debugMode) {
            // Debug mode: spawn specific animal by index
            if (animalIndex !== null && animalIndex < sideViewAnimals.length) {
                const animal = new Animal();
                const animalData = sideViewAnimals[animalIndex];
                animal.emoji = animalData.emoji;
                animal.scale = animalData.scale;
                animal.size = config.baseSize * animal.scale;
                animal.element.textContent = animal.emoji;
                animal.element.style.fontSize = `${animal.size}px`;
                
                // Position for debug mode (staggered)
                animal.x = (animalIndex * 80) - 50;
                animal.direction = 1;
                animal.updateYPosition();
                
                animals.push(animal);
                animal.element.style.left = `${animal.x}px`;
                animal.element.style.top = `${animal.y}px`;
            }
        } else {
            // Normal mode: spawn one random animal
            const animal = new Animal();
            animals.push(animal);
            animal.element.style.left = `${animal.x}px`;
            animal.element.style.top = `${animal.y}px`;
            
            console.log(`Animal spawned: ${animal.emoji}. Total: ${animals.length}`);
        }
    }
    
    // Initialize animals
    function initAnimals() {
        if (config.debugMode) {
            // Debug mode: spawn all animals for size comparison
            for (let i = 0; i < sideViewAnimals.length; i++) {
                setTimeout(() => spawnAnimal(i), i * 100);
            }
        } else {
            // Normal mode: spawn initial animals (up to maxAnimalCount)
            currentAnimalCount = Math.min(getAnimalCount(), config.maxAnimalCount);
            
            // Spawn initial animals with staggered delay (much faster)
            for (let i = 0; i < currentAnimalCount; i++) {
                setTimeout(() => {
                    if (animals.length < config.maxAnimalCount) {
                        spawnAnimal();
                    }
                }, i * 200); // Stagger spawns by 200ms (faster)
            }
            
            isInitialSpawnComplete = true;
        }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnimals);
    } else {
        // DOM already ready, wait a bit for header to render
        setTimeout(initAnimals, 100);
    }
    
    // Animation loop
    let lastTime = performance.now();
    let animationFrameId;
    let isPaused = false;
    
    function animate(currentTime) {
        // Skip animation if paused (page hidden)
        if (isPaused) {
            animationFrameId = requestAnimationFrame(animate);
            return;
        }
        
        const deltaTime = currentTime - lastTime;
        lastTime = currentTime;
        
        // Update all animals
        animals.forEach(animal => {
            animal.update(deltaTime);
        });
        
        // Simple spawn logic: spawn one animal at a time when needed (skip in debug mode)
        if (!config.debugMode) {
            // Update target count when all animals are gone (after initial spawn)
            if (animals.length === 0 && isInitialSpawnComplete) {
                currentAnimalCount = Math.min(getAnimalCount(), config.maxAnimalCount);
                lastSpawnTime = currentTime; // Reset spawn timer
            }
            
            // Spawn one animal if we're below target and below max limit
            const timeSinceLastSpawn = currentTime - lastSpawnTime;
            const spawnInterval = config.minSpawnDelay + Math.random() * (config.maxSpawnDelay - config.minSpawnDelay);
            
            if (animals.length < currentAnimalCount && 
                animals.length < config.maxAnimalCount && 
                timeSinceLastSpawn >= spawnInterval) {
                spawnAnimal();
                lastSpawnTime = currentTime;
            }
        }
        
        animationFrameId = requestAnimationFrame(animate);
    }
    
    // Pause animation when page is hidden to save CPU/RAM
    const handleVisibilityChange = () => {
        isPaused = document.hidden;
        if (!isPaused) {
            // Resume animation - reset timing to prevent jumps
            lastTime = performance.now();
        }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Start animation
    animate(performance.now());
    
    // Cleanup function (optional, for if you need to stop the animals)
    window.stopAnimals = function() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
        // Remove event listeners
        window.removeEventListener('resize', resizeHandler);
        window.removeEventListener('scroll', updateContainerPosition);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        // Clear timeout
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }
        // Remove animals
        animals.forEach(animal => animal.remove());
        animals.length = 0;
        // Remove container
        if (animalContainer && animalContainer.parentNode) {
            animalContainer.parentNode.removeChild(animalContainer);
        }
    };
    
    // Cleanup on page unload to prevent memory leaks
    window.addEventListener('beforeunload', () => {
        window.stopAnimals();
    });
})();
