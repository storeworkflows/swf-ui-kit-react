export const openLink = (href) => {
  const a = document.createElement('a');
  a.href = href;
  a.target = '_blank';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
  }, 0);
};
