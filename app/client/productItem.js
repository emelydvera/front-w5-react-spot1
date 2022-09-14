require('../pages/productItem/styles.scss');

const React = require('react');
const hydrate = require('nordic/hydrate');
const ProductItemView = require('../pages/productItem/view');

const {
    title
} = window.__PRELOADED_STATE__;



hydrate(

    <ProductItemView
        title={title}
    />

    , document.getElementById('root-app'),
);