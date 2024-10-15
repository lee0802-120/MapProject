const menu = document.querySelector(".header-hamburger");
const navMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navMenu.classList.toggle("active");

    let menuOpen = navMenu.classList.contains("active");
    let newMenuOpenStatus = menuOpen;
    menu.setAttribute("aria-expanded", newMenuOpenStatus);
});