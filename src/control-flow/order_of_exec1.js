const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');

const start = () => {
  console.log('start');  
  setImmediate(baz);
  Promise.resolve().then(() => console.log('boo'));
  new Promise((resolve, reject) => {resolve('bar');}).then((resolve) => {console.log('---> ', resolve);process.nextTick(zoo); });  
  process.nextTick(foo);
};

start();

/*
    console.log(start)
    microtaskqueue ==========> 
    macrotaskqueue ==========> baz

    console.log(start)
    microtaskqueue ==========> 
    macrotaskqueue ==========> baz


    console.log(start)
    microtaskqueue ==========> 
    macrotaskqueue ==========> baz


    console.log(start)
    microtaskqueue ==========> 
    macrotaskqueue ==========> baz

*/
