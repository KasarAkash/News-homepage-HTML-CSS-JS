let menuIcon = document.querySelector(".menuBar");
let closeBtn = document.querySelector(".closeBtn");
let sideMenuSection = document.querySelector(".sideMenuSection");
let shadowLayer = document.querySelector(".shadowLayer");
let isMenuOpen = false;
let htmlElm = document.querySelector("html").style;
let bodyElm = document.querySelector("body").style;

// html, body {margin: 0; height: 100%; overflow: hidden}

closeBtn.addEventListener("click", () => {
  sideMenuSection.style.display = "none";
  shadowLayer.style.display = "none";
  isMenuOpen = false;

  htmlElm.overflow = "visible";
  bodyElm.overflow = "visible";
});

menuIcon.addEventListener("click", () => {
  sideMenuSection.style.display = "block";
  shadowLayer.style.display = "block";
  isMenuOpen = true;

  htmlElm.overflow = "hidden";
  bodyElm.overflow = "hidden";
});

if (isMenuOpen) {
}
