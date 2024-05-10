const express = require('express');
const app = express();
const port = 1013;

const bodyParser = require('body-parser');
const path = require('path');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define the directory for views
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Route to render the homepage
app.get('/', (req, res) => {
    res.render('homePage');
});

// Route to render test-connection.ejs
app.get('/test-connection', (req, res) => {
    res.render('test-connection');
});

const testConnectionRouter = require('./controller/test-connection');
app.use('/controller', testConnectionRouter);

// Route to render create product
app.get('/create-product', (req, res) => {
    res.render('create-product');
});

const createProductRouter = require('./controller/create-product');
app.use('/controller', createProductRouter);

// Route to render list all product
app.get('/list-all-product', (req, res) => {
    res.render('list-all-product');
});

const listAllProductRouter = require('./controller/list-all-product');
app.use('/controller', listAllProductRouter);

// // Route to retrieve a product by ID and render retrive-product.ejs
// app.get('/retrieve-product', (req, res) => {

//     // const productId = req.query.id;

//     // res.render('retrieve-product', { productId: productId });
// });


// // Include routes for retrieve product
// const retrieveProductRouter = require('./controller/retrieve-product');
// app.use('/controller', retrieveProductRouter);

app.get('/retrieve-product', (req, res) => {
    res.render('retrieve-product');
});

const retrieveProductRouter = require('./controller/retrieve-product');
app.use('/controller', retrieveProductRouter);

app.get('/delete-product', (req, res) => {
    res.render('delete-product');
});

const deleteProductRouter = require('./controller/delete-product');
app.use('/controller', deleteProductRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
