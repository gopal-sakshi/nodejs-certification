import EventEmitter from 'events';


const myEmitterA = new EventEmitter();
myEmitterA.on('event', () => {
  console.log('[launchEventA] 1 console event occurred!');
  for (let i = 0; i < 10; i += 1) {
    console.log(`[launchEventA] 1-${i} console event occurred!`);
  }
  setTimeout(() => {
    console.log('[launchEventA] 2 console event occurred!');
  }, 0);
  setImmediate(() => {
    console.log('[launchEventA] 3 console event occurred!');
  });
  process.nextTick(() => {
    console.log('[launchEventA] 0 console event occurred!');
  });
  console.log('[launchEventA] 4 console event occurred!');
});
myEmitterA.emit('event');
