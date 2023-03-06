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




window.addEventListener("scroll", reviewsFU);

function reviewsFU() {
  let reviewsVps = document.querySelector("#reviews_vps");
  if (window.scrollY >= reviewsVps.offsetTop - 1000) {
    console.log("hi");
    reviewsVps.style.cssText =
      "animation: reviewsVps 2S;  transition: ease-in 400ms;opacity: 1;";
  }
}

window.addEventListener("scroll", featuresSngleFU);

let featuresSngle = document.querySelectorAll(".features-sngle");

//  featuresSngle.addEventListener("scroll", featuresSngleFU)

function featuresSngleFU() {
  for (i = 0; i < featuresSngle.length; i++) {
    featuresSngle[i].addEventListener("scroll", featuresSngleFU);
    if (window.scrollY >= featuresSngle[i].offsetTop - 879) {
      featuresSngle[i].style.cssText =
        "animation: features 2s;  transition: ease-in 200ms;opacity: 1;";
    }
  }
}

// // Animation plan
window.addEventListener("scroll", vpsplansFU);
function vpsplansFU() {
  let vpsplans = document.querySelector(".vpsplans1");
  if (window.scrollY >= vpsplans.offsetTop - 1000 && window.screen.width > 500) {
    vpsplans.style.cssText =
      "animation: vpsplans 2S;  transition: ease-in 200ms;opacity: 1;";
  }

  window.addEventListener("scroll", vpsplans2FU);

  function vpsplans2FU() {
    let vpsplans2 = document.querySelector(".vpsplans2");
    if (window.scrollY >= vpsplans2.offsetTop - 800 && window.screen.width > 500) {
      vpsplans2.style.cssText =
        "animation: vpsplans 2S;  transition: ease-in 200ms;opacity: 1;";
    }
  }

  window.addEventListener("scroll", vpsplans3FU);

  function vpsplans3FU() {
    let vpsplans3 = document.querySelector(".vpsplans3");

    if (window.scrollY >= vpsplans3.offsetTop - 800 && window.screen.width > 500) {
      vpsplans3.style.cssText =
        "animation: vpsplans 2S;  transition: ease-in 200ms;opacity: 1;";
    }
  }
}

// price transform moblie 500px
let plan1 = document.querySelector(".vpsplans1");
let plan2 = document.querySelector(".vpsplans2");
let plan3 = document.querySelector(".vpsplans3");

let label1 = document.querySelector(".label1");
let label2 = document.querySelector(".label2");
let label3 = document.querySelector(".label3");

label1.addEventListener("click", function () {
  plan1.style.cssText = "transform: translateX(0%);";
  plan2.style.cssText = "transform: translateX(-100%);";
  plan3.style.cssText = "transform: translateX(-100%);";

  // backgroundColor label
  label1.style.backgroundColor = "#3490de";
  label2.style.backgroundColor = "#e0e0e0";
  label3.style.backgroundColor = "#e0e0e0";
});

label2.addEventListener("click", function () {
  plan1.style.cssText = "transform: translateX(-100%);";
  plan2.style.cssText = "transform: translateX(0%);";
  plan3.style.cssText = "transform: translateX(-100%);";

  // backgroundColor label
  label1.style.backgroundColor = "#e0e0e0";
  label2.style.backgroundColor = "#3490de";
  label3.style.backgroundColor = "#e0e0e0";
});

label3.addEventListener("click", function () {
  plan1.style.cssText = "transform: translateX(-100%);";
  plan2.style.cssText = "transform: translateX(-100%);";
  plan3.style.cssText = "transform: translateX(0%);";

  // backgroundColor label
  label1.style.backgroundColor = "#e0e0e0";
  label2.style.backgroundColor = "#e0e0e0";
  label3.style.backgroundColor = "#3490de";
});
