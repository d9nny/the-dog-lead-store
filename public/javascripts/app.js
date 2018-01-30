/*jshint esversion: 6 */

document.addEventListener("DOMContentLoaded", function(event) {

    const store = new Store();

    if (store.height) {
        document.getElementById('products-container').style.height = store.height + 'px';
        document.querySelector("#filters-container .card").style.width = store.filterWidth + 'px';
    }
});