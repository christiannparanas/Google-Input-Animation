const lbl = document.getElementById('lbl');
const init = document.getElementById('init');

init.addEventListener('focus', () => {
   lbl.style.bottom = '28px';
});

init.addEventListener('blur', () => {
   if(!init.value) {
      lbl.style.bottom = '12px'
   }
});
