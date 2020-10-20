const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const port = process.env.PORT || 8080

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/ejs', require('./routes/movieRoutes'));





app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});