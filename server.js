var express = require('express');
var bodyParser = require("body-parser");

var app = express();

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static(__dirname + '/static'))

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});

var server = app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});