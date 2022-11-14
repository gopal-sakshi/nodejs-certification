const p1 = new Promise(resolve => setTimeout(resolve));

// // APPROACH I =========> returns 3,1,2
// Promise.resolve(p1).then(() => {
//   console.log("tick 3");
// });

// APPROACH II ========> returns 1,2,3
new Promise(resolve => resolve(p1)).then(() => {
    console.log("tick 3");
});

p1.then(() => {
  console.log("tick 1");
}).then(() => {
  console.log("tick 2");
});


/*
    Explanation: 

    If someObject is a Promise, new Promise(resolve) would cost two additional tick.

    a) If the value is a promise, 
        Promise.resolve(value) would return value exactly. 
        Promise.resolve(value) === value would be true. see MDN
    b) But new Promise(resolve => resolve(value)) would return a new promise 
        which has locked in to follow the value promise. 
        It needs an extra one tick to make the 'locking-in'.


    https://exploringjs.com/es6/ch_promises.html#sec_demo-promise

*/