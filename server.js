const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'statics')));

// Handle the main route
app.get('/', (req, res) => {
    res.render('home'); // Renders home.ejs
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
