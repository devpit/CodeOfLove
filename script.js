var btn = document.querySelector(".no");
var position
btn.addEventListener("click", function() {
position ? (position = 0) : (position = 150);
btn.style.transform = `translate(${position}px,0px)`;
btn.style.transition = "all 0.3s ease";
});

var btn = document.querySelector(".no");
var position
btn.addEventListener("mouseover", function() {
position ? (position = 0) : (position = 150);
btn.style.transform = `translate(${position}px,0px)`;
btn.style.transition = "all 0.3s ease";
});

function tanks() {
alert("tanks :)")
}  