// nav
const span2 = document.querySelector(".span");

const navmob = document.querySelector(".mob").classList;
const uls = document.querySelector(".uls").classList;
const social_media = document.querySelector(".uls_social_media").classList;
let uls_social_media = document.querySelector(".uls_social_media");
span2.addEventListener("click", () => {
  navmob.toggle("nav-mob");
  navmob.toggle("mobopen");
  uls.toggle("mob");
  social_media.toggle("mob_social_media_apper");
  uls_social_media.style.cssText = "";
});

// Animation plan
window.addEventListener("scroll", price);
let priceAN = document.querySelector(".plan1");
function price() {
  if (window.scrollY >= priceAN.offsetTop - 500 && window.screen.width >= 720)
    priceAN.style.cssText = "animation:plan 4s ;";
}

window.addEventListener("scroll", price2);
let priceAN2 = document.querySelector(".plan2");
function price2() {
  if (window.scrollY >= priceAN.offsetTop - 500 && window.screen.width >= 720)
    priceAN2.style.cssText = "animation:plan 4s; transition:ease-in 400ms;";
}

window.addEventListener("scroll", price3);
let priceAN3 = document.querySelector(".plan3");
function price3() {
  if (window.scrollY >= priceAN.offsetTop - 500 && window.screen.width >= 720)
    priceAN3.style.cssText = "animation:plan 4s; transition:ease-in 400ms;";
}

// price transform moblie 500px
let plan1 = document.querySelector(".plan1");
let plan2 = document.querySelector(".plan2");
let plan3 = document.querySelector(".plan3");

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




// Awesome animation
let ADAN0 = Awesomediv.children[0];
window.addEventListener("scroll", ADAN);
function ADAN() {
  if (window.scrollY >= ADAN0.offsetTop - 500) {
    ADAN0.style.cssText = "animation: AwesomedivAll 600ms; opacity: 1;";
  }
}

let ADAN1 = Awesomediv.children[1];
window.addEventListener("scroll", ADANFU1);
function ADANFU1() {
  if (window.scrollY >= ADAN1.offsetTop - 500) {
    ADAN1.style.cssText = "animation: AwesomedivAllleft 600ms; opacity: 1;";
  }
}

let ADAN2 = Awesomediv.children[2];
window.addEventListener("scroll", ADANFU2);
function ADANFU2() {
  if (window.scrollY >= ADAN2.offsetTop - 500) {
    ADAN2.style.cssText = "animation: AwesomedivAll 600ms; opacity: 1;";
  }
}

let ADAN3 = Awesomediv.children[3];
window.addEventListener("scroll", ADANFU3);
function ADANFU3() {
  if (window.scrollY >= ADAN3.offsetTop - 500) {
    ADAN3.style.cssText = "animation: AwesomedivAllleft 600ms; opacity: 1;";
  }
}

let ADAN4 = Awesomediv.children[4];
window.addEventListener("scroll", ADANFU4);
function ADANFU4() {
  if (window.scrollY >= ADAN4.offsetTop - 500) {
    ADAN4.style.cssText = "animation: AwesomedivAll 600ms; opacity: 1;";
  }
}

let ADAN5 = Awesomediv.children[5];
window.addEventListener("scroll", ADANFU5);
function ADANFU5() {
  if (window.scrollY >= ADAN5.offsetTop - 500) {
    ADAN5.style.cssText = "animation: AwesomedivAllleft 600ms; opacity: 1;";
  }
}

// button buy now (class pan-pay-1 pan-pay-2) => animation

let panAN1 = document.querySelector(".pan-pay-1");
window.addEventListener("scroll", panAN_FU1);
function panAN_FU1() {
  if (window.scrollY >= panAN1.offsetTop - 500) {
    panAN1.style.cssText = "animation: AnRight 700ms;";
  }
}

let panAN2 = document.querySelector(".pan-pay-2");
window.addEventListener("scroll", panAN_FU);
function panAN_FU() {
  if (window.scrollY >= panAN1.offsetTop - 500) {
    panAN2.style.cssText = "animation: AnLeft 700ms;";
  }
}


// reviews => animation

  window.addEventListener("scroll", reviewsFU);

function reviewsFU() {
  let reviewsVps = document.querySelectorAll(".reviewss");
  for (let r = 0; r <= reviewsVps.length; r++) {
    if (window.scrollY >= reviewsVps[r].offsetTop - 500) {
      reviewsVps[r].style.cssText =
        "animation: reviewsVps 2S;  transition: ease-in 400ms;opacity: 1;";
    }
  }
}


