async function loadInclude(selector, url) {
  const container = document.querySelector(selector);
  if (!container) return;
  try {
    const res = await fetch(url, { cache: 'no-cache' });
    const html = await res.text();
    container.innerHTML = html;
  } catch (e) {
    console.error('Failed to load include', url, e);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadInclude('#include-header', 'includes/header.html');
  loadInclude('#include-footer', 'includes/footer.html');
});
