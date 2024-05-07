const express = require('express');
const app = express();
const port = 1013;

const bodyParser = require('body-parser');
const path = require('path');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define the directory for views
app.set('views', path.join(__dirname, 'views'));

// Define a route for the homepage
app.get('/', (req, res) => {
    res.render('homePage');
});


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});