Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.openLink = void 0;

const openLink = function openLink(href) {
  const a = document.createElement('a');
  a.href = href;
  a.target = '_blank';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
  }, 0);
};

exports.openLink = openLink;
