/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const blogArticles = require('../data/blog-articles.json');
const products = require('../data/products.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    const featuredProducts = products.filter(product => product.featured === true);
    const latestArticles = blogArticles.slice(-4, blogArticles.length).reverse();
    res.render('index', { blogArticles: latestArticles, products: featuredProducts });
});

router.get('/blog', function(req, res, next) {
    res.render('blog', { blogArticles: blogArticles });
});

module.exports = router;
