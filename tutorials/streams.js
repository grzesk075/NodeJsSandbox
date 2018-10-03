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

console.log('Program arguments: ' + process.argv);

var readStream = fs.createReadStream(INTAKE);

readStream.on('data', onData);
readStream.on('error', onError);
readStream.on('end', onEnd);

fs.createReadStream(INTAKE).pipe(zlib.createGzip()).pipe(fs.createWriteStream(OUTLET));

console.log(INTAKE + ' compressed to ' + OUTLET);

console.log('Current dir (' + __dirname + ') content:');
fs.readdir('.',(err,files) => {

    if(err!=null)
        return console.error(err);

    files.forEach(function(file) {

        console.log(file);
    });
    console.log('End of current dir content.\n');
});
