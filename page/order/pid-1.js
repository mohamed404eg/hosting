// click to close and close
const span2 = document.querySelector(".span");

const navmob = document.querySelector(".mob").classList;
const uls = document.querySelector(".uls").classList;
span2.addEventListener("click", () => {
  navmob.toggle("nav-mob");
  navmob.toggle("mobopen");
  uls.toggle("mob");
  t = 1;
});

// spanMenu click to close
let spanMenu = document.querySelector(".span");
let ri_menu = document.querySelector(".ri-menu-2-line").classList;
spanMenu.addEventListener("click", function () {
  ri_menu.toggle("ri-close-line");
  ri_menu.toggle("ri-menu-2-line");
});
