const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS, Images)
app.use(express.static('public'));

// Handle the main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
