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

window.addEventListener("resize", () => {
    menu.classList.remove("_active");
    menuIcon.classList.remove("_active");
    body[0].classList.remove("_active");
});
