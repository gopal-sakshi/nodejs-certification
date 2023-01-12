
var events = require('events');                                                 // Import events module
var eventEmitter = new events.EventEmitter();                                   // Create an eventEmitter object
   
eventEmitter.on('connection', function connected() {
        console.log('connection succesful.');
        eventEmitter.emit('data_received');
        console.log('gasoline');
    }
);   
eventEmitter.on('data_received', function() {                                   // Bind the data_received event with the anonymous function
   console.log('data received succesfully.');
   setTimeout(some_func, 5000);
});
function some_func() {
    console.log("inside some_func()");
}
console.log("jing chak sarissa");
eventEmitter.emit('connection');                                                // Fire the connection event 

console.log("Program Ended.");

var listner1 = function listner1() {
    console.log('listner1 setup.');
}
eventEmitter.addListener('connection', listner1);
var count = eventEmitter.listenerCount('connection');
console.log(count);



/*
    Every action on a computer is an event.
    - when connection is made
    - when file is loaded
    
    All event properties & methods = instance of an EventEmitter object.
*/


/*    

see, there are 2 eventEmitter.on() functions... control doesnt go in there yet...
control doesnt even go into some_func() ---------> bcoz, nobody called it yet 
first statement to get printed is "jing chak sarissa"
then --------> event emitter emits an event --- 'connection' is the name of the event.
	then, node.js keeps on going and goes to next line (program ended line); 
	at the sametime ---> there is one event_handler (or event_listener) that is attached with connection event 
		this event handler is identified by eventemitter.on(connection, ...)
		this event handler (or event listener) is in standby mode
	Now, we have two things happening
		(1) node.js is ready to move to next line and print program ended
		(2) there is an event-listener which is waiting for connection event
			this even-listener executes function connected() ------> which again emits another event called data_received (for which another event-handler is waiting)
		(3) 
*/

/*


event emitter object
event handler
	event handler MUST release/emit an event (say event1)
event1 is caught by eventEmitter.on(parameter) function
	now, this parameter (which is another function is executed)

*/



/*
Callback 
- is an asynchronous equivalent for a function.
- The callback function is called at the completion of a given task


Node thread keeps an event loop 
whenever a task gets completed, it fires the corresponding event which signals the event-listener function to execute.


Events vs Callbacks
- callback functions are called when an asynchronous function returns its result
	whereas event handling works on the observer pattern... the functions that listen to events act as Observers
*/