'use strict';
var app = require('express')();
var server = require('http').Server(app);
const client = require("prom-client");
const metrics = require('./metrics');

app.get('/', function(req, res) {
    metrics.visit();
    res.send('hello world');
});

app.get('/metrics', function(req, res) {
    res.send(client.register.metrics());
});

server.listen(8000);
