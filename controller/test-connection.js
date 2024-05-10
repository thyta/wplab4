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
            res.send('Connection failed!');
        }
        else {
            const responseData = JSON.parse(response);
            if (responseData.message) {
                console.log('Connection successful!', responseData);
                console.log('Message:', responseData.message);
                res.send(responseData.message);
            } else {
                res.send("Connection Succesful");
            }
        }
    });

});

module.exports = router;
