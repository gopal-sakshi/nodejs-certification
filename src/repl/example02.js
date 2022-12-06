/**
 * Description: Create and press twice ^C again or ^D or type .exit.
 */

/** Require generics dependences */
import repl from 'repl';

repl.start({
  prompt: 'Node.js via stdin> ',
  input: process.stdin,
  output: process.stdout,
});

// INPUTS
  // (function blah() { return 3+5; } )();              // 8
  // console.log(3+5);                                  // prints 8, undefined (which is return value of console())