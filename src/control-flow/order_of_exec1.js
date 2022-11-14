const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');

const start = () => {
  console.log('start');
  
  // step 1
  setImmediate(baz);

  // step 2
  new Promise((resolve, reject) => {
    resolve('bar');
  }).then((resolve) => {
    console.log(resolve);

    // step 3
    process.nextTick(zoo);
  });

  // step 4
  process.nextTick(foo);
};

start();
