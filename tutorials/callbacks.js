/**
 * Event and callback example.
 * 
 * Run in main project folder using a command as follows:
 * node tutorials/callbacks.js
 */

var fs = require("fs");
var events = require("events");

var eventsEmitter = new events.EventEmitter();

var onDoneHandler = function(msg) {

    console.log('OnDoneHandler ' + msg);
}

eventsEmitter.on('done', onDoneHandler);

/**
 * Blocking function (executes in sequence).
 */
var syncRead = function() {

    var buff = fs.readFileSync('./tutorials/intake.txt');
    console.log(buff.toString());

    eventsEmitter.emit('done', 'sync');
}

/**
 * Non-blocking function (executes in parallel).
 */
var callback = function(err, buff) {

    if(err)
        return console.error(err);
    
    console.log(buff.toString());

    eventsEmitter.emit('done', 'async');
}

syncRead();
fs.readFile('./tutorials/intake.txt', callback);
console.log('End of main thread.\n');
