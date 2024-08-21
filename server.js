const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "statics" directory
app.use('/statics', express.static(path.join(__dirname, 'statics')));

// Set the directory where your HTML files are located
app.set('views', path.join(__dirname, 'views'));

// Set the view engine to use HTML files
app.engine('html', require('ejs').renderFile); // Allows rendering HTML with EJS syntax if needed
app.set('view engine', 'html');

// Route for the homepage
app.get('/', (req, res) => {
    res.render('home'); // Renders "home.html" from the "views" folder
});

// Route for another page
app.get('/another-page', (req, res) => {
    res.render('another-page'); // Renders "another-page.html" from the "views" folder
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
