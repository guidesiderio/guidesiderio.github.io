// Language toggle
const langToggle = document.getElementById('lang-toggle');
let currentLang = 'pt';

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  applyLanguage(currentLang);
});

function applyLanguage(lang) {
  // Update toggle UI
  langToggle.querySelectorAll('.lang-option').forEach((opt) => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';

  // Update all elements with data-lang-* attributes
  const attr = lang === 'pt' ? 'data-lang-pt' : 'data-lang-en';
  document.querySelectorAll(`[${attr}]`).forEach((el) => {
    el.textContent = el.getAttribute(attr);
  });

  document.title =
    lang === 'pt'
      ? 'Guilherme Desidério | Site descontinuado'
      : 'Guilherme Desidério | Site discontinued';
}
