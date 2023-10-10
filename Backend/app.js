const express = require('express');
const path = require('path');
const morgan = require('morgan')

const app = express();


app.set('view engine', 'ejs');
app.get('/public/header.css', (req, res) => {
    res.sendFile(__dirname + '/public/header.css')
});
app.listen(3000);

app.use(morgan('dev'));

app.get('/index.html', (req, res) => {
    var path = require('path');
    res.sendFile(path.resolve('../frontend/index.html'));
});
app.get('/home.html', (req, res) => {
    var path = require('path');
    res.sendFile(path.resolve('../frontend/home.html'));
});

app.get('/info.html', (req, res) => {
    var path = require('path');
    res.sendFile(path.resolve('../frontend/info.html'));
});
app.get('/about-us', (req, res) => {
    res.redirect('/info')
});
app.use((req, res) => {
    res.sendFile(path.resolve('../frontend/404.html'))
})


