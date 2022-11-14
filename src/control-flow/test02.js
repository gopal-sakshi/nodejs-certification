function getSong() {
    let _song = '';
    let i = 9;
    for (i; i > 0; i -= 1) {
        setTimeout(function () {
            _song += `${i} beers on the wall, you take one down and pass it around, ${i - 1} bottles of beer on the wall\n`;
            if (i === 1) {
                _song += "Hey let's get some more beer";
            }
        }, 0);        
    }

    return _song;
}

function singSong(_song) {
    if (!_song) { console.log("phattu ===> song is empty, FEED ME A SONG!"); return 0}
    console.log(_song);
}

const song = getSong('beer');
singSong(song);



// data exists outside memory of iteration
    /*
        setTimeout() instructs the CPU 
        - to store the instructions elsewhere on the bus,
        - instructs that the data is scheduled for pickup at a later time. 
        
        Thousands of CPU cycles pass before the function hits again at the 0 millisecond mark, 
        the CPU fetches the instructions from the bus and executes them. 
        The only problem is that song ('') was returned thousands of cycles prior.

        The same situation arises in dealing with file systems and network requests. 
        The main thread simply cannot be blocked for an indeterminate period of time
            therefore, we use callbacks to schedule the execution of code in time in a controlled manner.

    */