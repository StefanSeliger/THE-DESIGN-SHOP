/* INDEX HTML */
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

/* CONTACT NEWSLETTER HTML */
let contactName = document.getElementById("contactName")
let contactMail = document.getElementById("contactMail")
let contactPhone = document.getElementById("contactPhone")
let contactMessage = document.getElementById("contactMessage")
let newsletterName = document.getElementById("newsletterName")
let newsletterSurname = document.getElementById("newsletterSurname")
let newsletterMail = document.getElementById("newsletterMail")

function contactForm() {
    console.log(contactName.value)
    console.log(contactMail.value)
    console.log(contactPhone.value)
    console.log(contactMessage.value)
}

function newsletterForm() {
    console.log(newsletterName.value)
    console.log(newsletterSurname.value)
    console.log(newsletterMail.value)
}
