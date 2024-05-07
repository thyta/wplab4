const WooCommerceAPI = require('woocommerce-api');

// Initialize WooCommerce API with your credentials
const WooCommerce = new WooCommerceAPI({
    url: 'http://localhost/wordpress', // Replace 'YOUR_STORE_URL' with your WooCommerce store URL
    consumerKey: 'ck_01952f15afbe2bf3ee373eba9535f5cc4c53a29d', // Replace 'YOUR_CONSUMER_KEY' with your consumer key
    consumerSecret: 'cs_966639af66f53c672d517a2145db0c7d97feabb4', // Replace 'YOUR_CONSUMER_SECRET' with your consumer secret
    wpAPI: true,
    version: 'wc/v3' // WooCommerce API version
});

// Test the connection
WooCommerce.get('products', function (err, data, res) {
    if (err) {
        console.log('>>> Error:', err);
    } else {
        console.log('Connection successful!');
        // console.log('Response Data:', data);
    }
});
