/*jshint esversion: 6 */

const dogLeadStore = {};

dogLeadStore.setActive = function() {
    const current = location.pathname,
          navLinks = document.querySelectorAll('a.nav-link');

    for (var i = 0; i < navLinks.length; i++) {
        if (navLinks[i].getAttribute('href') === current){
            navLinks[i].classList.add('active');
        }
    }
};

dogLeadStore.addToCart = function(event, sku) {
    event.preventDefault();
    const product = dogLeadStore.store.products.find(item => item.sku === sku);
    dogLeadStore.basket.addProduct(product);
};

document.addEventListener("DOMContentLoaded", function(event) {
    dogLeadStore.currentPage = document.querySelector('.page-container div').id;
    dogLeadStore.mobileScreen = window.height > 767; // tablet break-point
    dogLeadStore.store = new Store();
    dogLeadStore.basket = new Basket();

    dogLeadStore.setActive();
    dogLeadStore.store.getProducts();

    if (dogLeadStore.currentPage === 'page-store' && !dogLeadStore.mobileScreen) {
        dogLeadStore.store.setupDesktop();
    }
});