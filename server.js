var express = require('express');
var bodyParser = require("body-parser");

var app = express();

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static(__dirname + '/static'))
app.use('/vegas', express.static(__dirname + '/node_modules/vegas/dist/'))

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/program', function (req, res) {
    res.sendFile('templates/program.html', { root: __dirname });
});

app.get('/directions', function (req, res) {
    res.sendFile('templates/directions.html', { root: __dirname });
});

app.get('/dresscode', function (req, res) {
    res.sendFile('templates/dresscode.html', { root: __dirname });
});

app.get('/children', function (req, res) {
    res.sendFile('templates/children.html', { root: __dirname });
});

app.get('/gifts', function (req, res) {
    res.sendFile('templates/gifts.html', { root: __dirname });
});

app.get('/food', function (req, res) {
    res.sendFile('templates/food.html', { root: __dirname });
});

app.get('/osa', function (req, res) {
    res.sendFile('templates/osa.html', { root: __dirname });
});

var server = app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});