var express = require('express');
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('static'))

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});