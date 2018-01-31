/*jshint esversion: 6 */

const dogLeadStore = {};

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

    dogLeadStore.store.getProducts();

    if (dogLeadStore.currentPage === 'page-store' && !dogLeadStore.mobileScreen) {
        dogLeadStore.store.setupDesktop();
    }
});