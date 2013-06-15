var express = require('express');
var app = express();
var core = require('./core')(app);

app.listen(5000);