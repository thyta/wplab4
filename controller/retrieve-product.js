const express = require('express');
const router = express.Router();
const WooCommerceAPI = require('woocommerce-api');

router.post('/retrieve-product', (req, res) => {
    const {
        productId, httpLink, key, secretKey
    } = req.body;

    console.log('HTTP Link:', httpLink);
    console.log('Key:', key);
    console.log('Secret Key:', secretKey);

    const WooCommerce = new WooCommerceAPI({
        url: httpLink,
        consumerKey: key,
        consumerSecret: secretKey,
        wpAPI: true,
        version: 'wc/v3'
    });

    // Retrieve the product
    WooCommerce.get(`products/${productId}`, function (err, data, response) {
        if (err) {
            console.log(">>error: " + err);
            return;
        }
        const product = JSON.parse(response);
        console.log('Product retrieved:', product);
        res.send(response);
    });

});

module.exports = router;
