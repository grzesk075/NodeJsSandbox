/**
 * Streams concept tutorial.
 */

 var fs = require('fs');

 var data = '';

 var onError = function(err) {

    console.log(err);
 }

 var onData = function(chunk) {

    data += chunk.toString();
 }

 var onEnd = function() {

    console.log(data);
 }

var readStream = fs.createReadStream('./tutorials/intake.txt');

readStream.on('data', onData);
readStream.on('error', onError);
readStream.on('end', onEnd);

console.log('End of main thread.');