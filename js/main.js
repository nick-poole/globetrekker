/*===== SHOW MENU =====*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=== CHANGE BACKGROUND HEADER ===*/

/*===== SWIPER DISCOVER =====*/

/*===== VIDEO =====*/

/*===== SHOW SCROLL UP =====*/

/*=== SCROLL SECTIONS ACTIVE LINK ===*/

/*==== SCROLL REVEAL ANIMATION ====*/

/*===== DARK LIGHT THEME =====*/

// const panels = document.querySelectorAll(".panel");
// panels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     removeActiveClasses();
//     panel.classList.add("active");
//   });
// });

// function removeActiveClasses() {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// }
