const menuEmail = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);
const burgerMenu = document.querySelector(`.menu`);
const mobileMenu = document.querySelector(`.mobile-menu`);
const aside = document.querySelector(`.product-detail`);
const shopingcartimg = document.querySelector(`.navbar-shopping-cart`);


menuEmail.addEventListener(`click`, toggleDesktopMenu);

function toggleDesktopMenu() {
    aside.classList.add(`inactive`);
    desktopMenu.classList.toggle(`inactive`);
}



burgerMenu.addEventListener(`click`, toggleburgerMenu);

function toggleburgerMenu() {
    aside.classList.add(`inactive`);
    mobileMenu.classList.toggle(`inactive`);
}


shopingcartimg.addEventListener(`click`, asideShooppingCart);

function asideShooppingCart() {
    desktopMenu.classList.add(`inactive`);
    mobileMenu.classList.add(`inactive`);
    aside.classList.toggle(`inactive`);
}