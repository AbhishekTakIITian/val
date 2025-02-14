const express = require('express');
const path = require('path');
const app = express();

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Serve static files
app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

// Routes
app.get('/*', (req, res) => {
    res.render('home', {
        name: "Your Girlfriend's Name",
        message: "Happy Valentine's Day!"
    });
});

// For Vercel
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;