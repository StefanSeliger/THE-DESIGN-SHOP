let navMobile = document.getElementById("navMobile")
let openMobileNav = document.getElementById("openMobileNav")

function openMenu() {
    navMobile.style.display = "block"
    openMobileNav.style.display = "none"
}

function closeMobileMenu() {
    navMobile.style.display = "none"
    openMobileNav.style.display = "block"
}