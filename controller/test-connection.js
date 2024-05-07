const express = require('express');
const router = express.Router();
const WooCommerceAPI = require('woocommerce-api');

router.post('/test-connection', (req, res) => {
    const { httpLink, key, secretKey } = req.body;

    console.log('HTTP Link:', httpLink);
    console.log('Key:', key);
    console.log('Secret Key:', secretKey);

    const WooCommerce = new WooCommerceAPI({
        url: httpLink,
        consumerKey: key,
        consumerSecret: secretKey,
        wpAPI: true,
        version: 'wc/v3' // WooCommerce API version
    });

    // Test the connection
    WooCommerce.get('products', function (err, data, response) {
        if (err) {
            console.log('>>> Error:', err);
            res.json({ success: false, message: 'Connection failed!' });
        } else {
            console.log('Connection successful!');
            // console.log('Response Data:', data);
            res.json({ success: true, message: 'Connection tested successfully!' });
        }
    });

});

module.exports = router;
