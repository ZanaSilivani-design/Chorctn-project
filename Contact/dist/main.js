const humMenu = document.querySelector(".hamburger-menu");
const openMenu = document.querySelector(".full-screen-nav");
const nav = document.querySelector(".navigation");
humMenu.addEventListener("click", function () {
  humMenu.classList.toggle("change");
  openMenu.classList.toggle("open");
  nav.classList.toggle("nav-shadow");
});
