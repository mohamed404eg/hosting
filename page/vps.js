const span2 = document.querySelector(".span");



const navmob =document.querySelector(".mob").classList;
const uls = document.querySelector(".uls").classList;

span2.addEventListener("click", () => {

    navmob.toggle('nav-mob');
    navmob.toggle('mobopen');
    uls.toggle('mob');



});
