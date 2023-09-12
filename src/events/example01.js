import EventEmitter from 'events';


const myEmitterA = new EventEmitter();
myEmitterA.on('event23', () => {
  console.log('[launchEventA] an event occurred 222222222 !');
});
const launchEventA = () => {
  myEmitterA.emit('event23');
};


const myEmitterB = new EventEmitter();
myEmitterB.on('event', () => {
  console.log('[launchEventB] an event occurred3333333333!');
});
const launchEventB = () => {
  myEmitterB.emit('event');
};

launchEventA();
setTimeout(() => {
  launchEventB();
}, 1000);
