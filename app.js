const navBtn = document.querySelector(".menuBtn");
const menuLineTop = document.querySelector(".menu-line-top");
const menuLineCenter = document.querySelector(".menu-line-center");
const menuLineBot = document.querySelector(".menu-line-bottom");
const toTop = document.querySelector(".to-top");

//Hamburger Button Animation
navBtn.addEventListener("click", () => {
  menuLineTop.classList.toggle("menuToggled");
  menuLineCenter.classList.toggle("menuToggledCenter");
  menuLineBot.classList.toggle("menuToggled");
});

// Back to Top

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("scroll-up");
  } else {
    toTop.classList.remove("scroll-up");
  }
});

let readMore = document.querySelector(".read-more");
readMore.addEventListener("click", () => {
  readMore.parentNode.classList.toggle("expand-bio");
});

//Forms
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const contactNo = document.querySelector("#contactNum");

//clear fields upon refresh of page
window.onload = function () {
  // Reset input fields
  var inputFields = document.querySelectorAll("input");
  for (var i = 0; i < inputFields.length; i++) {
    inputFields[i].value = "";
  }
};

inputFields.forEach(function (input) {
  input.required = true;
  input.setAttribute("autocomplete", "off");

  input.addEventListener("input", function (event) {
    // const popover = input.parentElement.querySelector(".error-popover");
    const inputLabel = input.nextElementSibling;
    if (input.validity.typeMismatch) {
      // popover.style.display = "flex";
      inputLabel.classList.add("label-levitate");
      formSubmit.disabled = true;
    } else {
      popover.style.display = "none";
      inputLabel.classList.remove("label-levitate");
      formSubmit.disabled = false;
    }
  });
});
