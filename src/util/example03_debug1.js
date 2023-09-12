// util.debuglog(section[, callback])
    // section <string>: It accepts an <string> identifying the portion of the application for which the debuglog function is being created.
    // callback Fn: It accepts the callback invoked the first time the logging function is called with a function argument that is a more optimized logging function..

// const util = require('util');
import util from 'util';
const debugLog = util.debuglog('run-app');

debugLog('hello from my debugger [%d]', 123);
// SET NODE_DEBUG=run-app&&node util.js

// Another way to import debuglog
import { debuglog } from 'util';

const debuglogue = debuglog('run-app1');

// Use debuglog() method
debuglogue('hello from run-app [%d]', 123);

const a = "old Value";

let deebuglog = util.debuglog('run-app2',
	(debugging) => {

		// Replace with a logging function
		// that optimizes out
		a = "new Value";

		// Testing if the section is enabled
		deebuglog = debugging;
	});

// prints the debuglog function
// console.log(util.inspect(deebuglog, showHidden = true, compact = true));

// Prints nothing
console.log(a);

// logs app *
deebuglog();

deebuglog(`hi there, it's run-app [%d]`, 2333);

