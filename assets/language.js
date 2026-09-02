(function () {
  const key = 'islets-language';
  const normalize = value => String(value || '').toLowerCase().startsWith('zh') ? 'zh' : 'en';
  const query = new URLSearchParams(location.search).get('lang');
  const stored = localStorage.getItem(key);
  const browser = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
  let current = query === 'zh' || query === 'en' ? query : (stored ? normalize(stored) : normalize(browser));

  function apply(lang, remember = true) {
    current = normalize(lang);
    document.documentElement.lang = current === 'zh' ? 'zh-CN' : 'en';
    document.body.classList.toggle('english', current === 'en');
    document.querySelectorAll('[data-lang-current]').forEach(button => {
      button.textContent = current === 'zh' ? '中文' : 'EN';
      button.setAttribute('aria-label', current === 'zh' ? '当前语言：中文，点击切换为 English' : 'Current language: English; switch to Chinese');
    });
    if (remember) localStorage.setItem(key, current);
    window.dispatchEvent(new CustomEvent('islets:languagechange', { detail: { language: current } }));
    return current;
  }

  window.IsletsLanguage = { get: () => current, set: lang => apply(lang), toggle: () => apply(current === 'zh' ? 'en' : 'zh') };
  document.addEventListener('DOMContentLoaded', () => {
    apply(current, query !== null || stored !== null);
    document.querySelectorAll('[data-lang-current]').forEach(button => button.addEventListener('click', window.IsletsLanguage.toggle));
  });
  window.addEventListener('storage', event => {
    if (event.key === key && event.newValue) apply(event.newValue, false);
  });
})();
