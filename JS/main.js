function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const type = new Typed(".typed", {
    strings: ["Software Engineer", "Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    showCursor: false 
})