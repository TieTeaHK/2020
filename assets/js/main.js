document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('[data-lang-switch]');
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.nav-toggle');

  function setLanguage(lang) {
    document.body.dataset.lang = lang;
    localStorage.setItem('tieTeaLang', lang);
    buttons.forEach((button) => {
      const isActive = button.dataset.langSwitch === lang;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.langSwitch));
  });

  const storedLang = localStorage.getItem('tieTeaLang') || 'zh';
  setLanguage(storedLang);

  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }
});
