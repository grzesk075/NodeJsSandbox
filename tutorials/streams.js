/**
 * Stream concept tutorial.
 */

 var fs = require('fs');
 var zlib = require('zlib');

 const INTAKE = './tutorials/intake.txt';
 const OUTLET = './tutorials/intake.txt.gz';

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

var readStream = fs.createReadStream(INTAKE);

readStream.on('data', onData);
readStream.on('error', onError);
readStream.on('end', onEnd);

fs.createReadStream(INTAKE).pipe(zlib.createGzip()).pipe(fs.createWriteStream(OUTLET));

console.log(INTAKE + ' compressed to ' + OUTLET);