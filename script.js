const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
// Here the function mobileMenu() also adds an active class on our hamburger and our nav-menu which makes our mobile menu open. we can use the active class on the hamburger to create that X animation when we click on the hamburger. so let's do that now.


// But there is a catch, the hamburger menu doesn't close when we click a link. So let's add that now,
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}