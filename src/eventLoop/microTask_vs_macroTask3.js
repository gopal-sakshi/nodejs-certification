console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(() => console.log(4), 3000));       // will execute after 3 seconds
Promise.resolve().then(() => console.log(5));
setTimeout(() => console.log(6), 5000);                     // will execute only after 5 seconds
console.log(7);
