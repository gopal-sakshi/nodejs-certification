import util from 'util';
import axios from 'axios';

async function fn() {
  var joke24 = await axios({
    method: 'get',
    url: 'https://official-joke-api.appspot.com/random_joke',
    headers: { 'Accept-Encoding': 'application/json'}    
  });
  return joke24.data;
}
const callbackFunction = util.callbackify(fn);            // SEE testing_backend "callbackify1.js"

// APPROACH I
callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});

// // APPROACH II ==============> if you directly use fn() ====> you get Promise <pending>
// var blah = fn();
// console.log(blah);