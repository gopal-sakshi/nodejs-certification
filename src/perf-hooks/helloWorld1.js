//from nodejs docs ----------->  display the duration taken by the function for its execution
// const { performance, PerformanceObserver } = require('perf_hooks');
import { PerformanceObserver, performance } from 'perf_hooks';
function someFunction() {
    for (let i=0; i<1e9; i++) {}
    console.log('hello world');
}

const wrapped = performance.timerify(someFunction);


const obs = new PerformanceObserver((list) => {
    console.log(list.getEntries()[0].duration);     //this would console log the duration
    console.log('-------------------------- X26 ----------------------------')
    console.log(list.getEntries()[0]);              // this logs the performance entry
    obs.disconnect();           
});

obs.observe({ entryTypes: ['function'] });

wrapped();