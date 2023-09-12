/*
    either use "pipe" (or) "events"
    but dont mix both

    APPROACH 01
    src23.pipe(res)     // pipe fileOutput to "res" object

    APPROACH 02
    src23.on('data', (chunk22) => res.write(chunk22) );
    src23.on('end', () => res.end() )
*/

// All streams are instances of EventEmitter. 
// They emit events that can be used to read and write data.

/*
    IMPORTANT Events
    - see stream_events23.png

    https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/
*/