// tenses_main.js - shared logic for all tenses exercises

// Utility: shuffle array in-place
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Detect which questions JSON to load
function getQuestionsJson() {
  const html = location.pathname.split('/').pop();
  if (html.startsWith('tenses_exercise3a')) return 'questions3a.json';
  if (html.startsWith('tenses_exercise3b')) return 'questions3b.json';
  if (html.startsWith('tenses_exercise4a')) return 'questions4a.json';
  if (html.startsWith('tenses_exercise4b')) return 'questions4b.json';
  if (html.startsWith('tenses_exercise4c')) return 'questions4c.json';
  if (html.startsWith('tenses_exercise5a')) return 'questions5a.json';
  if (html.startsWith('tenses_exercise5b')) return 'questions5b.json';
  // fallback: try to match tenses_exerciseN.html to questionsN.json
  const match = html.match(/tenses_exercise(\d+)\.html/);
  if (match) return `questions${match[1]}.json`;
  return null;
}

// Render questions and options
function renderQuestions(questions) {
  const root = document.getElementById('questions-root');
  root.innerHTML = '';
  let idx = 0;
  questions.forEach(q => {
    const section = document.createElement('div');
    section.className = 'section';
    let processedEnglish = q.english;
    const blankCount = Array.isArray(q.answer) ? q.answer.length : 1;
    for (let i = 0; i < blankCount; i++) {
      const correctAnswer = Array.isArray(q.answer) ? q.answer[i] : q.answer;
      processedEnglish = processedEnglish.replace(
        '_____',
        `<span class='blank' data-idx='${idx + i}' data-qid='${q.id || ''}' data-bidx='${i}' data-answer='${correctAnswer}'><small>(${idx + i + 1})</small></span>`
      );
    }
    section.innerHTML = `
      <div class="sentence"><span class="cantonese">${q.cantonese}</span> ${processedEnglish}</div>
      <div class="keywords-container"></div>
    `;
    const kw = section.querySelector('.keywords-container');
    const opts = shuffle([...q.options]);
    opts.forEach((opt, i) => {
      const d = document.createElement('div');
      d.className = 'draggable';
      d.setAttribute('draggable', 'true');
      d.setAttribute('data-answer', opt);
      d.innerHTML = `<span class="draggable-label">${String.fromCharCode(97+i)}</span>${opt}`;
      kw.appendChild(d);
    });
    root.appendChild(section);
    idx += blankCount;
  });
}

// Drag-and-drop and answer logic
let answersShown = false;
let selectedDraggable = null;
let selectedSection = null;

function clearSelection() {
  if (selectedDraggable) {
    selectedDraggable.classList.remove('selected');
  }
  selectedDraggable = null;
  selectedSection = null;
}

function selectDraggable(draggable, section) {
  clearSelection();
  selectedDraggable = draggable;
  selectedSection = section;
  draggable.classList.add('selected');
}

function fillBlank(blank, draggable) {
  const answerText = draggable.textContent.replace(/^\s*\w\s*/, '').trim();
  const correct = blank.dataset.answer;
  const label = blank.querySelector('small');
  blank.innerHTML = '';
  blank.appendChild(label);
  const dragLabel = draggable.querySelector('.draggable-label');
  if (dragLabel) {
    blank.appendChild(dragLabel.cloneNode(true));
  }
  blank.appendChild(document.createTextNode(' ' + answerText));
  blank.classList.add('filled');
  if (answerText === correct) {
    blank.classList.add('correct');
    blank.classList.remove('incorrect');
  } else {
    blank.classList.add('incorrect');
    blank.classList.remove('correct');
  }
}

function setupDragDropLogic() {
  document.querySelectorAll('.section').forEach(section => {
    const draggables = section.querySelectorAll('.draggable');
    const blanks = section.querySelectorAll('.blank');
    draggables.forEach(draggable => {
      draggable.addEventListener('dragstart', () => { draggable.classList.add('dragging'); });
      draggable.addEventListener('dragend', () => { draggable.classList.remove('dragging'); });
      draggable.addEventListener('click', (e) => { e.preventDefault(); if (selectedDraggable === draggable) { clearSelection(); } else { selectDraggable(draggable, section); } });
      let touchStarted = false;
      draggable.addEventListener('touchstart', (e) => { touchStarted = true; draggable.classList.add('dragging'); });
      draggable.addEventListener('touchend', (e) => { if (touchStarted) { e.preventDefault(); const touch = e.changedTouches[0]; const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY); const targetBlank = elementBelow?.closest('.blank'); if (targetBlank && targetBlank.closest('.section') === section) { fillBlank(targetBlank, draggable); } draggable.classList.remove('dragging'); touchStarted = false; } });
    });
    blanks.forEach(blank => {
      blank.addEventListener('dragover', e => e.preventDefault());
      blank.addEventListener('drop', e => { e.preventDefault(); const dragging = section.querySelector('.dragging'); if (!dragging) return; fillBlank(blank, dragging); });
      blank.addEventListener('click', () => { if (blank.classList.contains('filled')) { const label = blank.querySelector('small'); blank.innerHTML = ''; blank.appendChild(label); blank.classList.remove('filled', 'correct', 'incorrect'); } else if (selectedDraggable && selectedSection === section) { fillBlank(blank, selectedDraggable); clearSelection(); } });
      blank.addEventListener('contextmenu', e => { e.preventDefault(); if (blank.classList.contains('filled')) return; const correct = blank.dataset.answer; const label = blank.querySelector('small'); blank.innerHTML = ''; blank.appendChild(label); const draggable = Array.from(draggables).find(d => d.textContent.trim().endsWith(correct)); if (draggable) { const dragLabel = draggable.querySelector('.draggable-label'); if (dragLabel) { blank.appendChild(dragLabel.cloneNode(true)); } } blank.appendChild(document.createTextNode(' ' + correct)); blank.classList.add('filled', 'correct'); });
    });
  });
  document.addEventListener('click', (e) => { if (!e.target.closest('.draggable') && !e.target.closest('.blank')) { clearSelection(); } });
}

// Show Answers button logic
window.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('toggle-answers-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      answersShown = !answersShown;
      btn.textContent = answersShown ? 'Hide Answers' : 'Show Answers';
      clearSelection();
      document.querySelectorAll('.blank').forEach(blank => {
        const label = blank.querySelector('small');
        blank.innerHTML = '';
        blank.appendChild(label);
        blank.classList.remove('filled', 'correct', 'incorrect');
        if (answersShown) {
          const correct = blank.dataset.answer;
          const section = blank.closest('.section');
          const draggables = section.querySelectorAll('.draggable');
          const draggable = Array.from(draggables).find(d => d.textContent.trim().endsWith(correct));
          if (draggable) {
            const dragLabel = draggable.querySelector('.draggable-label');
            if (dragLabel) {
              blank.appendChild(dragLabel.cloneNode(true));
            }
          }
          blank.appendChild(document.createTextNode(' ' + correct));
          blank.classList.add('filled', 'correct');
        }
      });
    });
  }
  // Load questions and render
  const questionsJson = getQuestionsJson();
  if (!questionsJson) return;
  fetch(questionsJson)
    .then(r => r.json())
    .then(qs => {
      renderQuestions(qs);
      setupDragDropLogic();
    });
}); 