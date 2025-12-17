// Main JavaScript file for tenses exercises
// Simplified version with dropdown menus and immediate feedback

let currentQuestions = [];
let answersShown = false;

// Initialize the exercise when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Try to find the questions array
    if (typeof questions !== 'undefined') {
        currentQuestions = questions;
    } else if (typeof questions2 !== 'undefined') {
        currentQuestions = questions2;
    } else if (typeof questions3a !== 'undefined') {
        currentQuestions = questions3a;
    } else if (typeof questions3b !== 'undefined') {
        currentQuestions = questions3b;
    } else if (typeof questions4a !== 'undefined') {
        currentQuestions = questions4a;
    } else if (typeof questions4b !== 'undefined') {
        currentQuestions = questions4b;
    } else if (typeof questions4c !== 'undefined') {
        currentQuestions = questions4c;
    } else if (typeof questions5a !== 'undefined') {
        currentQuestions = questions5a;
    } else if (typeof questions5b !== 'undefined') {
        currentQuestions = questions5b;
    } else if (typeof questions6a !== 'undefined') {
        currentQuestions = questions6a;
    } else {
        console.error('No questions array found!');
        return;
    }
    
    if (currentQuestions.length > 0) {
        generateExercise();
        setupEventListeners();
    } else {
        console.error('Questions array is empty!');
    }
});


function generateExercise() {
    const content = document.getElementById('exercise-content');
    if (!content) return;
    
    // Group questions by section
    const sections = {};
    currentQuestions.forEach((question, index) => {
        const section = question.section || 'General';
        if (!sections[section]) {
            sections[section] = [];
        }
        sections[section].push({...question, originalIndex: index});
    });
    
    let html = '';
    
    // Generate sections
    Object.keys(sections).forEach(sectionName => {
        html += `<div class="section">`;
        
        sections[sectionName].forEach(question => {
            html += generateQuestionHTML(question);
        });
        
        html += `</div>`;
    });
    
    content.innerHTML = html;
}

function generateQuestionHTML(question) {
    const questionId = `q${question.originalIndex}`;
    let html = `<div class="sentence">`;
    
    if (question.cantonese) {
        html += `<div class="cantonese">${question.cantonese}</div>`;
    }
    
    // Handle multiple blanks
    const parts = question.english.split('_____');
    const isMultipleAnswers = Array.isArray(question.answer);
    
    for (let i = 0; i < parts.length - 1; i++) {
        html += parts[i];
        
        // Create dropdown for each blank
        const blankId = `${questionId}_${i}`;
        const answer = isMultipleAnswers ? question.answer[i] : question.answer;
        
        html += `<select class="answer-dropdown" data-question-id="${blankId}" data-answer="${answer}">`;
        html += `<option value="">...</option>`;
        
        if (question.options) {
            question.options.forEach(option => {
                html += `<option value="${option}">${option}</option>`;
            });
        }
        
        html += `</select>`;
    }
    
    // Add the last part if it exists
    if (parts[parts.length - 1]) {
        html += parts[parts.length - 1];
    }
    
    html += `</div>`;
    return html;
}


function setupEventListeners() {
    // Toggle answers button
    const toggleBtn = document.getElementById('toggle-answers-btn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleAnswers);
    }
    
    // Dropdown change events
    const dropdowns = document.querySelectorAll('.answer-dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('change', handleDropdownChange);
    });
}

function handleDropdownChange(e) {
    const dropdown = e.target;
    const selectedValue = dropdown.value;
    const correctAnswer = dropdown.dataset.answer;
    
    // Remove previous feedback classes
    dropdown.classList.remove('correct', 'incorrect');
    
    if (selectedValue === '') {
        // No selection made
        return;
    }
    
    // Check if correct and apply styling
    if (selectedValue === correctAnswer) {
        dropdown.classList.add('correct');
    } else {
        dropdown.classList.add('incorrect');
    }
}

function toggleAnswers() {
    const dropdowns = document.querySelectorAll('.answer-dropdown');
    const btn = document.getElementById('toggle-answers-btn');
    
    if (!answersShown) {
        // Show answers
        dropdowns.forEach(dropdown => {
            const correctAnswer = dropdown.dataset.answer;
            if (correctAnswer) {
                dropdown.value = correctAnswer;
                dropdown.classList.add('correct');
            }
        });
        btn.textContent = 'Hide Answers';
        answersShown = true;
    } else {
        // Hide answers
        dropdowns.forEach(dropdown => {
            dropdown.value = '';
            dropdown.classList.remove('correct', 'incorrect');
        });
        btn.textContent = 'Show Answers';
        answersShown = false;
    }
}
