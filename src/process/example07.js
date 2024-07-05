/**
 * Description: Use warning event for example to get exceeded listener of Event Emitter.
 */

/** Require generics dependences */
import EventEmitter from 'events';


process.on('warning', (warning) => {
  console.warn(warning);
});

// Define listener example.
const myEmitterOnce = new EventEmitter();

// Set max listeners to 1
myEmitterOnce.setMaxListeners(1);

myEmitterOnce.on('event', () => {
  console.log('listener A');
});
myEmitterOnce.on('event', () => {
  console.log('listener B');
});

myEmitterOnce.emit('My custom event');
