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

const couponData = {
    code: 'NEWCOUPON2',
    discount_type: 'percent', // Discount type (fixed_cart, percent, fixed_product, percent_product)
    amount: '20', // Discount amount
    individual_use: false, // Can be used with other coupons
    exclude_sale_items: true, // Exclude sale items
    usage_limit: 100, // Usage limit per coupon
    usage_limit_per_user: 1, // Usage limit per user
};

function createCoupon() {
    WooCommerce.post('coupons', couponData, function (err, data, res) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Coupon published:', JSON.parse(res));
    });
}

const publishDate = new Date('2024-05-08T20:15:00'); // Set the desired publish date and time
const currentDate = new Date();

if (publishDate > currentDate) {
    const timeUntilPublish = publishDate.getTime() - currentDate.getTime();
    console.log(`Coupon will be published in ${timeUntilPublish / 1000} seconds`);
    setTimeout(createCoupon, timeUntilPublish);
} else {
    console.log('Publish date is in the past. Coupon will not be published.');
}