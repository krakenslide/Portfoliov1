const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
};

var autoType = new Typed(".autoType", {
    strings: ["Ankit Mukhopadhyay", "Coding", "Bug Bashing"],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true
})