const SHAMPOO_CONTENT = `
<p>SHAMPOO refers to 7 types of figurative language that are useful in storytelling.<br>SHAMPOO 係一個易記嘅縮寫，代表七種寫作修辭，幫你寫故事更生動、更易記。</p>

<ul>
  <li><strong>S - Simile:</strong> Compares two different things using "like" or "as" (e.g., "As brave as a lion").<br><strong>🕯️明喻：</strong>用「像」或「如同」去比較兩樣唔同嘅嘢（例：「勇敢得像獅子」）。</li>
  <li><strong>H - Hyperbole:</strong> Extreme exaggeration used for emphasis or humor (e.g., "I've told you a million times").<br><strong>💃誇張：</strong>用極端說法加強語氣或搞笑（例：「我講過一百萬次」）。</li>
  <li><strong>A - Alliteration:</strong> The repetition of the same initial letter or sound (e.g., "Big blue bubbles").<br><strong>🎯頭韻：</strong>連續詞語用相同開頭字母或聲音（例：「Big blue bubbles」）。</li>
  <li><strong>M - Metaphor:</strong> Directly compares two unlike things by stating one is the other (e.g., "Life is a roller coaster").<br><strong>🥷🏻隱喻：</strong>直接講 A 係 B，用嚟比較兩樣唔同嘅事物（例：「人生係過山車」）。</li>
  <li><strong>P - Personification:</strong> Gives human qualities or emotions to inanimate objects or ideas (e.g., "The wind whispered").<br><strong>😼擬人：</strong>俾冇生命嘅物件或概念人類特質（例：「風在低聲細語」）。</li>
  <li><strong>O - Onomatopoeia:</strong> Words that sound like the noise they describe (e.g., "Buzz," "Crash," "Bang").<br><strong>🎵擬聲：</strong>模仿聲音嘅字（例：「嗡嗡」、「砰」、「砰然」）。</li>
  <li><strong>O - Oxymoron:</strong> A phrase combining two contradictory terms (e.g., "Deafening silence," "Pretty ugly").<br><strong>⚔️矛盾修辭：</strong>將兩個相反嘅詞放埋一齊（例：「震耳欲聾嘅沉默」、「好醜」）。</li>
</ul>
<p><strong>Tip:</strong> Use it when it fits. Don’t do it just for the sake of it.<br><strong>小提示：</strong>用得恰當係最好，唔好係唔係都用。</p>
`;

function openShampooModal() {
  const overlay = document.getElementById('shampooModalOverlay');
  const content = document.getElementById('shampooModalContent');
  if (!overlay || !content) return;
  content.innerHTML = SHAMPOO_CONTENT;
  overlay.classList.add('active');
}

function closeShampooModal(event) {
  if (event) {
    event.stopPropagation();
  }
  const overlay = document.getElementById('shampooModalOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
}

function handleShampooTriggerKey(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openShampooModal();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('.shampoo-trigger');
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', openShampooModal);
    trigger.addEventListener('keydown', handleShampooTriggerKey);
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeShampooModal();
  }
});
