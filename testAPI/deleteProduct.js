const WooCommerceAPI = require('woocommerce-api');

// Enter your WooCommerce API credentials and the URL of your store
const consumerKey = 'ck_49566c7031d10d1362d482c3e5b8c511c0966208';
const consumerSecret = "cs_6b35259784e4dcafd7da12deb0b0d725058d5c14";
const storeUrl = 'http://localhost/wordpress';

const WooCommerce = new WooCommerceAPI({
    url: storeUrl,
    consumerKey: consumerKey,
    consumerSecret: consumerSecret,
    wpAPI: true,
    version: 'wc/v3'
});

// ID of the product you want to delete
const productId = 58;

WooCommerce.delete(`products/${productId}`, function (err, data, res) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Product deleted:', JSON.parse(res));
});