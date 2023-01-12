/*

global objects

0. console
1. dirname, filename
2. setInterval, setTimeout
3. require

*/

console.log('hello from global object');
console.log(__dirname);     // important when we use server side code - logging, finding metadata in folders
                            // gives the name of the directory of the current executing file
console.log(__filename);       // important when we generate dynamic webpages, dynamic screens

var test_require = require('./test');     // since we are in the same folder, we use ./


/*
  
        Global objects
        - available throughout the application
            no need to initialise, declare, or stuff
            they are reserved keywords, cant use them in our application as variable names
        - examples
            console
            exports
            module
            setInterval
            __dirname, __filename

        Shared modules
        - modules which are exported & used in other modules = will share same variable instance & its value
        - its a way of sharing code & values between modules
 
*/

/**************************************

    Global objects

(A) _filename, _dirname
(a) console.log(_filename) = 			//prints the path of the file... 
													C:\Users\GopAL\Google Drive\IT related stuff\Node.js\test1.js
													C:\Users\GopAL\Google Drive\IT related stuff\Node.js\main.js
													
(b) console.log(_dirname)

(B) TIMER FUNCTIONS
(a) var tim1 = setTimeout(cb, ms)					used to run callback cb after at least ms milliseconds.
																	tim1 is return value... opaque value, no use... only purpose is we can call clearTimeout() based on tim1
																	
(b) clearTimeout(tim1)									function to stop a timer that was previously created with setTimeout()

(c) var t = setInterval(cb, ms)							run callback cb repeatedly after at least ms milliseconds

(d) clearInterval(t)
(e) setImmediate (callback, )
(f) clearImmediate (immediate_object)			


(C) console is a global object 
	is used to print different levels of messages to stdout and stderr.
	
	console.log()			// prints to stdout (display simple message on console)
	console.error() 		// prints to stderr (render error message on console)
	console.warn()		// 							(display warning message on console)
--------------------------------------------------------------------------------------------------------------

    */