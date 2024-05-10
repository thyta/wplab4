const express = require('express');
const router = express.Router();
const WooCommerceAPI = require('woocommerce-api');

router.post('/delete-product', (req, res) => {
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


    WooCommerce.delete(`products/${productId}`, function (err, data, response) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(response)
        res.send(response)
    });
});

module.exports = router;
