/**
 * There are no threads in Node.js.
 * Concurency is supported by event emiters mechanism.
 * Running child processes is available, 
 * but there is no sharing variables and functions like in thread concept.
 * Only standard streams and signals are available.
 * Node.js runs single-threaded, 
 * non-blocking, asynchronously programming, which is very memory efficient.
 * It's designed for I/O-intense web applications, especially supported
 * Single Page Application Concept. This approach is more efficient
 * than Apache Tomcat with multithreading.
 * Subprocesses are not needed to achieve this goals.
 * It is experimental 'worker_threads' package for CPU-intense operations,
 * what node.js is not designed for.
 */

process.stdin.on('data', function(data) {

    console.log('Data in child process: ' + data);
});

console.log('Child process pid=%d, ppid=%d started with param: %s', 
    process.pid, process.ppid, process.argv[2]);

console.error('Some child error.');

process.exit(1);