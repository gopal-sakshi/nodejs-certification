const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');

const start = () => {
  console.log('start');  
  setImmediate(baz);
  Promise.resolve().then(() => console.log('boo'));
  new Promise((resolve, reject) => { 
    resolve('bar'); 
  }).then((data23) => {
    console.log('---> ', data23);
    process.nextTick(zoo); 
  });  
  process.nextTick(foo);
};

start();
console.log('endeeyyy');

// During 1st iteration of event loop
  // start, endeeyyy =======> tasks
  // baz got pushed into macroTaskQueue
  // all this gets pushed into microTaskQueue =========> JS engine goes through this queue, before starting 2nd iteration of eventLoop
    // boo promise resolved                   // so .then() of boo will be called when JS engine goes through microTaskQueue
    // bar promise resolved                   // so .then() of bar will be called
    // foo got added into microtaskQueue      // foo is not a promise... but some arrow function
  // JS engine going through microTaskQueue
    // .then() of boo called 
    // .then() of bar called ----------------> only NOW, zoo() is added to microTaskQueue
    // foo() arrow fn executed
  // JS engine checks if microTaskQueue is empty
    // but its not... bcoz, zoo() got added to microTaskQueue... so, it will be executed
  // microTaskQueue is now empty
  // JS engine executes macroTaskQueue ===> baz

