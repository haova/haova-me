const printBtns = document.querySelectorAll('.printBtn');

for (const printBtn of printBtns)
  printBtn.addEventListener('click', () => {
    window.print();
  });
