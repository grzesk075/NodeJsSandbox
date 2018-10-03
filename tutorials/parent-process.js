var child_process = require('child_process');

var param = 'ąśź';

var workerProcess = child_process.spawn('node', ['./tutorials/child-process.js', param]);

workerProcess.stdout.on('data', function(data) {

    console.log('[child]' + data);
});

workerProcess.stderr.on('data', function(data) {

    console.error('[child]' + data);
});

workerProcess.on('close', (code, signal) => {

    console.log('Code=%s, signal=%s', code, signal);
});