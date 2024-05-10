const express = require('express');
const router = express.Router();
const WooCommerceAPI = require('woocommerce-api');

router.post('/list-all-product', (req, res) => {
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
            // const responseData = JSON.parse(response);
            // console.log('Connection successful!', responseData);
            // console.log('Message:', responseData);
            // res.send(responseData);
            // console.log(JSON.parse(response))
            // const responseData = JSON.parse(response);

            // // Extracting name and id from each object
            // const extractedData = responseData.map(item => {
            //     return {
            //         id: item.id,
            //         name: item.name
            //     };
            // });

            // console.log('Extracted data:', extractedData);
            // res.send(extractedData);

            // console.log(response);

            const responseData = JSON.parse(response);

            const extractedData = responseData.map(item => {
                return {
                    id: item.id,
                    name: item.name
                };
            });
            console.log(extractedData);

            res.send(extractedData);

        }
    });

});

module.exports = router;
