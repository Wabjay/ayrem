// SCRIPT NAVBAR START

var menu = document.getElementById("menu-open");
// var nav = document.getElementById("nav");
var nav1 = document.querySelector(".menu ul");

menu.addEventListener("click", function (e) {
  nav.classList.toggle("hide-mobile");

  e.preventDefault();
  if (nav.classList.contains("hide-mobile")) {
    // nav1.style.width = "0vw";
    menu.src = "../images/drop.png";
  } else {
    menu.src = "../images/delete.png";
    // nav1.style.width = "100vw";
  }
});

// var menu = document.getElementById("menu-open");
// var nav = document.getElementById("nav");
// var navUl = document.querySelector(".menu ul");
// nav.classList.remove("hide-mobile");
// var navLi = document.querySelectorAll(".menu ul li");
// navUl.classList.remove("opacity");
// window.onload = function () {
//   menus();
// };
// function menus() {
// var widths = screen.scroll;
// if (widths < 1023) {
//   console.log(widths);

//   menu.addEventListener("click", function () {
//     if (navUl.classList.contains("opacity")) {
//       menu.src = "../images/delete.png";
//       navUl.classList.remove("opacity");
//     } else {
//       menu.src = "../images/drop.png";
//       navUl.classList.add("opacity");
//     }
//   });
// }
// }
// window.onload = function () {
//   document.querySelector("body").style.height = "100%";
// };

// navUl.style.opacity = "1";

window.onscroll = function () {
  changeHeader();
};

function changeHeader() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").className = "scroll";
    document.querySelector(".logo").src = "images/logo_white.png";
  } else {
    document.getElementById("header").className = "";
    document.querySelector(".logo").src = "images/logo.svg";
  }
}
