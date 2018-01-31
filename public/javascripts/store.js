/*jshint esversion: 6 */

function Store() {
    this.products = [];
}

Store.prototype.getProducts = function() {
    const self = this;
    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (xhr.status === 200) { self.products = JSON.parse(xhr.response); }
    };

    xhr.open('GET', '/store/product-list', true);
    xhr.send();
};

Store.prototype.setupDesktop = function() {
    const filterWidth = document.getElementById('filters-container').offsetWidth - 15;
    document.querySelector("#filters-container .card").style.width = filterWidth + 'px';
    document.querySelector("#filters-container .card").classList.add('fixed');
};
