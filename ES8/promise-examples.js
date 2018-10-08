"use strict";

let promise = new Promise(function (resolve, reject) {
    // Function is called immediatly after Promise is created.
    // Promis supplies implementations of functions resolve and reject,
    // which set state and result of the Promise object.
    // Those functions can be executed synchronously and asynchronously
    // in callbacks of non-blocking API.

    setTimeout(() => resolve('Done.'), 1000); //resolve is passed to asynchronous callback

    setTimeout(() => {reject(new Error('Failed.'))}, 2000);
    // Only first usage of resolve or reject brings effect.
});

let onError = function(error) {

    console.error('[Error handler]' + error);
};

promise.then(console.log).catch(onError);

promise.then(function anotherHendler(result) {
    console.log('[Another handler]' + result);
}).catch(onError);

// Result of the promise is passed as an argument to above handler functions.
// Result was set by calling result function in executor of Promise.
// Methods then and catch can be used more than once.

console.log('Waiting for promise to resolve.');
