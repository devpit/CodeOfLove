function desvia(btn) {
  btn.style.position = 'absolute';
  btn.style.bottom = geraPosicao(10, 70);
  btn.style.left = geraPosicao(10, 70);
}

function geraPosicao(min, max) {
  return (Math.random() * (max - min) + min) + "%";
}

const sim = document.getElementById('yes');

sim.addEventListener("click", () => {

let timerInterval
Swal.fire({
  title: 'Obrigado 😍',
  html: 'Prometo lhe fazer feliz. 💘',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})

});
