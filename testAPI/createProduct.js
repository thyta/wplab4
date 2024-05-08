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


// Define the product data to add
const productData = {
    name: 'Monkey D. Luffy',
    type: 'simple',
    regular_price: '3000000000',
    description: 'Đây là Tứ Hoàng',
    categories: [
        { id: 98 }
    ],
    images: [
        {
            src: 'https://i.pinimg.com/originals/50/08/ef/5008efb9df96969624d2674645027a3a.png',
        }
    ],
    stock_quantity: 10
};

WooCommerce.post('products', productData, function (err, data, res) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('New product added:', JSON.parse(res));
});