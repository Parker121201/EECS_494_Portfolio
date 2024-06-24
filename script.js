function toggleMenu() {
    // Target these two elements
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // When clicked, will either add or remove the open class in that element
    // The open class has the styling
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}