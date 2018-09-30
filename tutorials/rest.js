var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
app.use(bodyParser.json());

var usersBuff = fs.readFileSync('./tutorials/users.json', 'utf8');
var usersJSON = JSON.parse(usersBuff);

app.get('/users', function(req, rsp) {

    rsp.json(usersJSON);
});

app.post('/adduser', function(req, rsp) {

    var newUser = req.body;

    usersJSON.users.push(newUser);

    rsp.end();
});

/**
 * This doesn't work properly because of bad design of users.json.
 * Array is not suitable. Use properties named user<id> instead.
 */
app.delete('/removeuser/:id', function(req, rsp) {

    var id = req.params.id;

    var i = 0;
    usersJSON.users.forEach((user) => {
        if(user.id == id)
            delete usersJSON.users[i];
        
        i++;
    });

    rsp.end();
});

var server = app.listen(8080, 'localhost', () => {

    var address = server.address();
    console.log('REST server is listening at http://%s:%s', address.address, address.port);
});