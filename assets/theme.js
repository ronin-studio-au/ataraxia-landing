// Loaded in <head> so the theme is set before first paint
(() => {
  const root = document.documentElement;
  const systemDark = matchMedia('(prefers-color-scheme: dark)');
  root.dataset.theme = localStorage.getItem('theme') || (systemDark.matches ? 'dark' : 'light');

  systemDark.addEventListener('change', e => {
    if (!localStorage.getItem('theme')) root.dataset.theme = e.matches ? 'dark' : 'light';
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.theme-toggle').addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', root.dataset.theme);
    });
  });
})();
