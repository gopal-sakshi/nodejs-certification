/**
 * Description: Use .callbackify method with Promise.
 */


import util from 'util';

function fn() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve('Hi from Promise');
      });
    } catch (err) {
      reject(err);
    }
  });
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});
