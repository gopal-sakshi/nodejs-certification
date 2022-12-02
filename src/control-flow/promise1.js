const p = new Promise(resovle => setTimeout(resovle));      // see resovle_vs_resolve

new Promise(resolve => resolve(p)).then(() => {
  console.log("tick 3");
});

p.then(() => {
  console.log("tick 1");
}).then(() => {
  console.log("tick 2");
});

// setTimeout(resolve) ===> added to microTaskQueue
// an 'anonymous promise' is immediately resolved with 'p' promise ===> this goes into microTaskQueue
  // so, associated .then() of this 'anonymous promise' will get executed
// 