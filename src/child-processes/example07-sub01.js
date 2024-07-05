/**
 * Description: child process of fork function.
 */


// 

process.on('message', (m) => {
  console.log('CHILD SUB01 got message:', m);
});

// Causes the parent to print: PARENT got message: { foo: 'bar', baz: 'SUB01' }
process.send({ foo: 'bar', baz: 'SUB01' });
