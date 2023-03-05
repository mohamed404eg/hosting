const span2 = document.querySelector(".span");



const navmob =document.querySelector(".mob").classList;
const uls = document.querySelector(".uls").classList;
const social_media = document.querySelector(".uls_social_media").classList;

span2.addEventListener("click", () => {

    navmob.toggle('nav-mob');
    navmob.toggle('mobopen');
    uls.toggle('mob');
    social_media.toggle('mob_social_media_apper');



});
