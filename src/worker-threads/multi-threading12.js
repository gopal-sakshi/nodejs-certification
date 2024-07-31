// split 100 seconds synchronous task ===> 100 sync tasks each 1 sec
// use setImmediate to tell Node we are done 

/*********************************************************************************/
const processItem = (i) => { console.log('processing ', i) }
// APPROACH I
for (let i=0; i< 100; i++) { processItem(i) }      // 100 seconds task

// APPROACH II
for (let i=0; i< 10; i++) { processItem(i) }           // pick only 10 items
for (let i=10; i< 20; i++) { processItem(i) }
for (let i=90; i< 100; i++) { processItem(i) }

// if you think about it, both approaches are same... both block the JS thread for 100 seconds
// even though we split the code process 10 items at a time
/*********************************************************************************/

// const crypto = require('crypto')
import crypto from 'crypto'
const arr = new Array(200).fill('something')
function processChunk() {
    if (arr.length === 0) {
        // code that runs after the whole array is executed
    } else {
        console.log('processing chunk');
        const subarr = arr.splice(0, 10)                    // pick 10 items and remove them from the array
        for (const item of subarr) {
            doHeavyStuff(item)              // do heavy stuff for each item on the array
        }
        setImmediate(processChunk)                  // Put the function back in the queue
    }
}

processChunk()

function doHeavyStuff(item) {
    crypto.createHmac('sha256', 'secret').update(new Array(10000).fill(item).join('.')).digest('hex')
}

// This is just for confirming that we can continue doing things
let interval = setInterval(() => {
    console.log('tick!')
    if (arr.length === 0) clearInterval(interval)
}, 0);


/*
    we can process 10 items each time the event loop runs and 
    call setImmediate(callback) so that if there’s something else the program needs to do, 
    it will do it in between those chunks of 10 items. 
    I’ve added a setInterval() to demonstrate exactly that.
*/
