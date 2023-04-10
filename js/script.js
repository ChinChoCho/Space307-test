"use strict";

const menuIcon = document.querySelector(".menu__icon");
const menu = document.querySelector(".menu");
const body = document.getElementsByTagName("body");
console.log(menu, menuIcon);

menuIcon.addEventListener("click", function () {
    menu.classList.toggle("_active");
    menuIcon.classList.toggle("_active");
    body[0].classList.toggle("_active");
});
