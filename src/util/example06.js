/**
 * Description: Use .callbackify method with async function.
 */


import util from 'util';

async function fn1(num1) {
  return `Hi from Async with ${num1}`;
}
const callbackFunction1 = util.callbackify(fn1);

callbackFunction1((err, ret) => {
  if (err) throw err;
  console.log(ret);
});
