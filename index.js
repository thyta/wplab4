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

// Import the router for handling form submission
const testConnectionRouter = require('./controller/test-connection');
app.use('/controller', testConnectionRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
