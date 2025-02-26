document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.querySelector(".search-box");
    const searchIcon = document.querySelector("#search-icon");
    const menu = document.querySelector(".navbar");
    const menuIcon = document.querySelector("#menu-icon");
    const header = document.querySelector("header");

    // Toggle search box
    searchIcon.addEventListener("click", () => {
        searchBox.classList.toggle("active");
        menu.classList.remove("active");
    });

    // Toggle menu
    menuIcon.addEventListener("click", () => {
        menu.classList.toggle("active");
        searchBox.classList.remove("active");
    });

    // Hide menu and search box on scroll
    window.addEventListener("scroll", () => {
        menu.classList.remove("active");
        searchBox.classList.remove("active");
        header.classList.toggle("shadow", window.scrollY > 0);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll(".navbar a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
            menu.classList.remove("active");
        });
    });
});
