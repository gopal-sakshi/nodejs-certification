var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
// when event is called, not now, but when event is called - you should call the function myEventHandler... or ie you should execute 2nd argument
eventEmitter.on('scream', myEventHandler);


  console.log('jng chak!!!');
//Fire the 'scream' event:
eventEmitter.emit('scream');