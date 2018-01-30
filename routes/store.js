/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const products = require('../data/products.json');

router.get('/', function(req, res, next) {
    res.render('store', { products: products });
});

router.get('/:sku', function(req, res, next) {
    const product = products.find(product => product.sku === req.params.sku);
    res.render('product', { product: product });
});

module.exports = router;
