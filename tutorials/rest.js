var express = require('express');
var fs = require('fs');

var app = express();

app.get('/users', function(req, rsp) {

    rsp.end('Hello world');
});

var server = app.listen(8080, () => {

    var address = server.address();
    console.log('REST server is listening at http://%s:%s', address.address, address.port);
});