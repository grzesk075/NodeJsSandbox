/**
 * Streams concept tutorial.
 */

 const fs = require('fs');

 const data = new Buffer('');

 const onError = function(err) {

    console.log('Error: ' + err);
 }

 const onData = function(chunk) {

    data.write(chunk.toString());
 }

 const onEnd = function() {

    console.log(data.toString());
 }

const readStream = fs.createReadStream('./tutorials/intake.txt');

readStream.on('data', onData);
readStream.on('error', onError);
readStream.on('end', onEnd);

console.log('End of main thread.');