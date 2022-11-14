console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(() => console.log(4)));
Promise.resolve().then(() => console.log(5));
setTimeout(() => console.log(6));
console.log(7);


/*
    Output

    1
    7
    3
    5
    2
    6
    4

*/


/*
    EXPLANATION

console.log(1);
// The first line executes immediately, it outputs `1`.
// Macrotask and microtask queues are empty, as of now.

setTimeout(() => console.log(2));
// `setTimeout` appends the callback to the macrotask queue.
// - macrotask queue content:
//   `console.log(2)`

Promise.resolve().then(() => console.log(3));
// The callback is appended to the microtask queue.
// - microtask queue content:
//   `console.log(3)`

Promise.resolve().then(() => setTimeout(() => console.log(4)));
// The callback with `setTimeout(...4)` is appended to microtasks
// - microtask queue content:
//   `console.log(3); setTimeout(...4)`

Promise.resolve().then(() => console.log(5));
// The callback is appended to the microtask queue
// - microtask queue content:
//   `console.log(3); setTimeout(...4); console.log(5)`

setTimeout(() => console.log(6));
// `setTimeout` appends the callback to macrotasks
// - macrotask queue content:
//   `console.log(2); console.log(6)`

console.log(7);
// Outputs 7 immediately.
// microtaskqueue ==========> console.log(3); setTimeout(...4); console.log(5)
// macrotaskqueue ==========> console.log(2); console.log(6)

Next iteration
// already outputtted ===> 1,7
// microtaskqueue ==========> console.log(3); setTimeout(...4); console.log(5)              // setTimeout(...4) gets added to macrotaskqueue
// macrotaskqueue ==========> console.log(2); console.log(6)


Next iteration
// already outputtted ===> 1,7,3,5
// microtaskqueue ==========>
// macrotaskqueue ==========> console.log(2); console.log(6); console.log(..4)


Next iteration
// already outputtted ===> 1,7,3,5,2,6,4
// microtaskqueue ==========> _empty_
// macrotaskqueue ==========> _empty_

*/