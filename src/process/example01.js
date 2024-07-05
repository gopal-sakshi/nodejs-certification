/**
 * Description: Use beforeExit event for get when event loop has no additional work to schedule.
 */

/** Require generics dependences */
// 

process.on('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code);
});

process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});

console.log('Hi from NodeJS... go to run a setTimeout');

// Define timeout for show while console.
setTimeout(() => {
  let i = 0;
  while (i <= 10) {
    console.log(i);
    i += 1;
  }
}, 0);
