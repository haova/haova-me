document.addEventListener('DOMContentLoaded', () => {
  for (const elm of document.querySelectorAll('.ql-formula')) {
    katex.render(elm.getAttribute('data-value'), elm, {
      throwOnError: false,
    });
  }
});
