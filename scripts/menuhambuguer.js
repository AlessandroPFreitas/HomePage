const openHamburguerMenu = document.querySelector("#icon-menu-hamburguer");
const closeHamburguerMenu = document.querySelector("#close-icon-menu-hamburguer");
const menuHamburguer = document.querySelector(".menu-hamburguer-container");

openHamburguerMenu.addEventListener("click", () => {
    menuHamburguer.classList.add("active");
});

closeHamburguerMenu.addEventListener("click", () => {
    menuHamburguer.classList.remove("active");
});