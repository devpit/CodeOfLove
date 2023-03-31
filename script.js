var btn = document.querySelector(".no");
var position
btn.addEventListener("click", function() {
position ? (position = 0) : (position = 150);
btn.style.transform = `translate(${position}px,0px)`;
btn.style.transition = "all 0.2s ease";
});

var btn = document.querySelector(".no");
var position
btn.addEventListener("mouseover", function() {
position ? (position = 0) : (position = 150);
btn.style.transform = `translate(${position}px,0px)`;
btn.style.transition = "all 0.2s ease";
});

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
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})

});

