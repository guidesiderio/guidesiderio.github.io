// Nav — scroll shadow
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Mobile nav toggle
const menuBtn = document.querySelector('.nav-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.nav-overlay');

function openMenu() {
  navLinks.classList.add('open');
  navOverlay.classList.add('visible');
  menuBtn.setAttribute('aria-expanded', 'true');
  menuBtn.setAttribute('aria-label', 'Fechar menu');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  navLinks.classList.remove('open');
  navOverlay.classList.remove('visible');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-label', 'Abrir menu');
  document.body.style.overflow = '';
}

menuBtn.addEventListener('click', () => {
  const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
  isOpen ? closeMenu() : openMenu();
});

navOverlay.addEventListener('click', closeMenu);

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Close menu on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

// Scroll reveal via IntersectionObserver
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navAnchors.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((section) => sectionObserver.observe(section));

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
    const text = el.getAttribute(attr);
    // For elements with child nodes that contain SVGs, only update text content carefully
    if (el.children.length === 0) {
      el.textContent = text;
    } else {
      // Find text nodes and update them, preserve child elements
      const childNodes = Array.from(el.childNodes);
      const hasOnlyText = childNodes.every((n) => n.nodeType === Node.TEXT_NODE);
      if (hasOnlyText) {
        el.textContent = text;
      } else {
        // For mixed content (text + SVG icons), update only text nodes
        // or use innerHTML if the data-lang contains the full desired text
        // For buttons with SVG + text: find the text span or set directly
        const spans = el.querySelectorAll('[data-lang-pt], [data-lang-en]');
        if (spans.length === 0 && el.dataset.langPt && el.dataset.langEn) {
          // Element has both attrs and mixed content — just update text nodes
          childNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
              node.textContent = '\n              ' + text + '\n            ';
            }
          });
        }
      }
    }
  });

  // Special case: "Ver projetos" button has SVG child — handle its text
  const btnPrimary = document.querySelector('.btn-primary[data-lang-pt]');
  if (btnPrimary) {
    const btnText = btnPrimary.getAttribute(attr);
    // Get first text node
    for (const node of btnPrimary.childNodes) {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
        node.textContent = '\n              ' + btnText + '\n              ';
        break;
      }
    }
  }
}
