const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Set up EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'statics')));

// Route for home page
app.get('/', (req, res) => {
    res.render('home');
});

// Route for sign-up page
app.get('/signup', (req, res) => {
    res.render('signup'); // Renders signup.ejs
});

// Route for login page
app.get('/login', (req, res) => {
    res.render('login'); // Renders login.ejs
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
