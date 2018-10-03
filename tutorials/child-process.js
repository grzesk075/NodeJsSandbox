/**
 * There are no threads in Node.js.
 * Concurency is supported by event emiters mechanism.
 * Running child processes is available, 
 * but there is no sharing variables and functions like in thread concept.
 * Only standard streams and signals are available.
 */

process.stdin.on('data', function(data) {

    console.log('Data in child process: ' + data);
});

console.log('Child process pid=%d, ppid=%d started with param: %s', 
    process.pid, process.ppid, process.argv[2]);

console.error('Some child error.');

process.exit(1);