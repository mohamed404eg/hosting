// click to close and close
const span2 = document.querySelector(".span");

const navmob = document.querySelector(".mob").classList;
const uls = document.querySelector(".uls").classList;
span2.addEventListener("click", () => {
  navmob.toggle("nav-mob");
  navmob.toggle("mobopen");
  uls.toggle("mob");

  let mob = document.querySelector(".mob");
  mob.style.display = "block";
});

window.addEventListener("scroll", function () {
  if (screen.width < 769) {
    let mob = document.querySelector(".mob");
    mob.style.display = "none";
  }
});

window.addEventListener("resize", function () {
  if (screen.width > 769) {
    let mob = document.querySelector(".mob");
    mob.style.display = "block";
  } else {
  }
});

// spanMenu click to close
let spanMenu = document.querySelector(".span");
let ri_menu = document.querySelector(".ri-menu-2-line").classList;
spanMenu.addEventListener("click", function () {
  ri_menu.toggle("ri-close-line");
  ri_menu.toggle("ri-menu-2-line");
});

// creat blog for loop
for (let i = 0; i < 21; i++) {
  // creat Element
  let creatDiv = document.createElement("div");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let img = document.createElement("img");

  // creat Text Node
  let TextH3 = document.createTextNode(
    " ما هي افصل نضام ادارة محتويل هل هو ووردبريس  "
  );
  let TextP = document.createTextNode(
    " أيهم أفضل: دروبال، جوملا أم ووردبريس؟ في بعض الأحيان لا يجب أن تقارن بين الأنظمة السابقة، فلكل واحد منهم استخداماته وإمكانياته ومميزاته التي تختلف أو تتفق، ولكن ..."
  );

  // set attrbut src img
  img.setAttribute("src", "./img/cms.png");

  // add to appendchild
  h3.append(TextH3);
  p.append(TextP);
  creatDiv.append(img);
  creatDiv.append(h3);
  creatDiv.append(p);

  // set class
  creatDiv.className = "blogs";

  // add to body in div id blog
  let blog = document.querySelector("#blog");
  blog.append(creatDiv);

  // مميزات اضافية
  img.addEventListener("click", function () {
    location.href = "#";
  });
  h3.addEventListener("click", function () {
    location.href = "#";
  });
}
