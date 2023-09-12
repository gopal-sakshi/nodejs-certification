import EventEmitter from 'events';

const myEmitterOnce = new EventEmitter();
myEmitterOnce.once('event', () => {
  console.log('[myEmitterOnce] An Event occurred!');
});

// Emit event
myEmitterOnce.emit('event');

// Remove event
myEmitterOnce.removeListener('event', () => {
  console.info('[myEmitterOnce] An Event removed!');
});

// Try emit again, with fail :)
myEmitterOnce.emit('event');
