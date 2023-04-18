/*===== SHOW MENU =====*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*===== REMOVE MENU MOBILE =====*/
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
