const express = require('express');
const router = express.Router();
const WooCommerceAPI = require('woocommerce-api');

router.post('/create-product', (req, res) => {
    const {
        httpLink, key, secretKey,
        productName, productRegularPrice,
        productDescription, productCategoryId,
        ProductImagesSrc, producStockQuantity
    } = req.body;

    console.log('HTTP Link:', httpLink);
    console.log('Key:', key);
    console.log('Secret Key:', secretKey);
    console.log('Name:', productName);

    const WooCommerce = new WooCommerceAPI({
        url: httpLink,
        consumerKey: key,
        consumerSecret: secretKey,
        wpAPI: true,
        version: 'wc/v3'
    });

    // Define the product data to add
    const productData = {
        name: productName,
        regular_price: productRegularPrice,
        description: productDescription,
        categories: [
            { id: productCategoryId }
        ],
        images: [
            {
                src: ProductImagesSrc,
            }
        ],
        stock_quantity: producStockQuantity
    };

    WooCommerce.post('products', productData, function (err, data, response) {
        if (err) {
            console.log('>>> Error:', err);
            res.send('Create product failed! Because' + err);
        }
        else {
            const responseData = JSON.parse(response);
            res.send('Create Product successful!');
        }
    });

});

module.exports = router;
