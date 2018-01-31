/*jshint esversion: 6 */

function Basket() {
    this.products = [];
    this.qty = 0;
}

Basket.prototype.addProduct = function(product) {
    const productObj = { qty: 1, product: product };
    const existingProduct = this.products.find(productObj => productObj.product === product);
    if (existingProduct) {
        existingProduct.qty ++;
    } else {
        this.products.push(productObj);
    }
    this.qty ++;
};

Basket.prototype.removeProduct = function(product) {
    const index = this.products.indexOf(product);
    if (this.products[index].qty > 1) {
        existingProduct.qty --;
    } else {
        this.products.splice(index, 1);
    }
    this.qty --;
};
