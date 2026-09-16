const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuBtn.setAttribute("aria-expanded", "true");
    } else {
        menuBtn.setAttribute("aria-expanded", "false");
    }
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        document.querySelector("header").classList.add("scrolled");
    } else {
        document.querySelector("header").classList.remove("scrolled");
    }
});