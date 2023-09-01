const navBtn = document.querySelector(".menuBtn");
const menuLineTop = document.querySelector(".menu-line-top");
const menuLineCenter = document.querySelector(".menu-line-center");
const menuLineBot = document.querySelector(".menu-line-bottom");

navBtn.addEventListener("click", () => {
  menuLineTop.classList.toggle("menuToggled");
  menuLineCenter.classList.toggle("menuToggledCenter");
  menuLineBot.classList.toggle("menuToggled");
});

const themeBtn = document.querySelector("#themeSelectorContainer");

themeBtn.addEventListener("click", () => {});
