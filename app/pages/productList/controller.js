const React = require('react');
const View = require('./view');
const ProductsService = require('../../../services/productsService');

exports.fetchProducts = function fetchProducts(req, res, next) {

    const { siteId } = req.platform;
    const { q, limit } = req.query;

    ProductsService.getProducts(siteId, q, limit)
        .then(data => {
            res.locals.products = data;
            res.locals.q = q;
            res.locals.limit = limit;
            next();
        })
        .catch(err => next(err));
        
}


exports.render = function render(req, res) {
    const ProductList = props => <View {...props} />
    res.render(ProductList, {
        products: res.locals.products,
        q: res.locals.q,
        limit: res.locals.limit,
        device: req.device
    })
}