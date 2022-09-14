const React = require('react');
const View = require('./view');

exports.render = function render(req, res) {
    const ProductList = props => <View {...props} />
    res.render(ProductList, {
       title :'Hello'
    })
}