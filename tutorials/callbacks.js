var fs = require("fs");

/**
 * Blocking function (executes in sequence).
 */
var syncRead = function() {

    var buff = fs.readFileSync('./tutorials/intake.txt');
    console.log(buff.toString());
}

/**
 * Non-blocking function (executes in parallel).
 */
var callback = function(err, buff) {

    if(err)
        return console.error(err);
    
    console.log(buff.toString());
}

syncRead();
fs.readFile('./tutorials/intake.txt', callback);
console.log('End of main thread.\n');
