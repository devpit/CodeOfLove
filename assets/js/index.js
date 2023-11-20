function fadeOutEffect() {
  var body = document.getElementsByTagName("body")[0];
  var fadeOut = setInterval(function () {
    if (!body.style.opacity) {
      body.style.opacity = 1;
    }
    if (body.style.opacity > 0) {
      body.style.opacity -= 0.1;
    } else {
      clearInterval(fadeOut);
      window.location.href = "app";
    }
  }, 200);
}

setTimeout(function(){
    fadeOutEffect();
}, 3000);