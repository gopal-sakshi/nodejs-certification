// SYNCHRONOUS
console.log('Hi from NodeJS');

// SET TIMEOUT with 0 seconds
setTimeout(() => {
  console.log('timeout');
}, 0);

// immediately resolved promse
Promise.resolve(44).then(data => console.log(data));

// SET IMMEDIATE... similar to setTimout() with 0 seconds dealy... execution order will depend on various factors
setImmediate(() => {
  console.log('immediate');
});
