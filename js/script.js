// source-: https://micku7zu.github.io/vanilla-tilt.js/

VanillaTilt.init(document.querySelector(".card"), {
  max: 25,
  speed: 400,
  glare: false,
  "max-glare": 1,
});

VanillaTilt.init(document.querySelectorAll(".card"));
