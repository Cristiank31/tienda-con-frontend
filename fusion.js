const menuEmail = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);
const burgerMenu = document.querySelector(`.menu`);
const mobileMenu = document.querySelector(`.mobile-menu`);
const aside = document.querySelector(`.product-detail-1`);
const shopingcartimg = document.querySelector(`.navbar-shopping-cart`);
const cardsContainer = document.querySelector(`.cards-container`);
const openAside = document.querySelector(`.product-detail`);
const closeAsideIcon = document.querySelector(`.product-detail-close`);


menuEmail.addEventListener(`click`, toggleDesktopMenu);

burgerMenu.addEventListener(`click`, toggleburgerMenu);

shopingcartimg.addEventListener(`click`, asideShooppingCart);

closeAsideIcon.addEventListener(`click`,closeAside);

function toggleDesktopMenu() {
    aside.classList.add(`inactive`);
    openAside.classList.add(`inactive`);
    desktopMenu.classList.toggle(`inactive`);
}



function toggleburgerMenu() {
    aside.classList.add(`inactive`);
    openAside.classList.add(`inactive`);
    mobileMenu.classList.toggle(`inactive`);
}



function asideShooppingCart() {
    desktopMenu.classList.add(`inactive`);
    mobileMenu.classList.add(`inactive`);
    openAside.classList.add(`inactive`);
    aside.classList.toggle(`inactive`);
}


function openAsideProductDetail (){
    desktopMenu.classList.add(`inactive`);
    aside.classList.add(`inactive`);
    openAside.classList.remove(`inactive`);
}

function closeAside(){
    openAside.classList.add(`inactive`);
}

const productList = [];
productList.push({
    name: "Inline Skates",
    price: 40,
    image: `https://i.linio.com/p/58e7b66c55bde998e0321a772d334238-product.webp`
});
productList.push({
    name: "Helmet",
    price: 10,
    image: `https://i.linio.com/p/511b5ca960caf5218d9170d3d6a85cf2-product.webp`
});
productList.push({
    name: "Protections",
    price: 10,
    image: `https://cityrun.com.co/wp-content/uploads/2019/08/protecciones_negras.jpg`
});


function renderProducts(array) {
    for (product of array) {
        const productCard = document.createElement(`div`);
        productCard.classList.add(`product-card`);
    
        const productimg = document.createElement(`img`);
        productimg.setAttribute(`src`, product.image);
        productimg.addEventListener(`click`,openAsideProductDetail)
    
        const productInfo = document.createElement(`div`);
        productInfo.classList.add(`product-info`);
    
        const productInfodiv = document.createElement(`div`);
    
        const productPrice = document.createElement(`p`);
        productPrice.innerText = `$` + product.price;
    
        const productname = document.createElement(`p`);
        productname.innerText = product.name;
    
        productInfodiv.append(productPrice,productname);
    
        const productInfoFigure = document.createElement(`figure`);
        const figureimgcart = document.createElement(`img`);
        figureimgcart.setAttribute(`src`, `./icons/bt_add_to_cart.svg`);
        productInfoFigure.appendChild(figureimgcart);
    
        productInfo.append(productInfodiv,productInfoFigure);
    
        productCard.append(productimg, productInfo);
    
        cardsContainer.appendChild(productCard); 
    }
}

renderProducts(productList)