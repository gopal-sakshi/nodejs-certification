/*
    A callback 
    - a simple function that's passed as a value to another function, 
    - and will only be executed when the event happens. 
    
    We can do this because 
    - JavaScript has first-class functions
    - functions can be assigned to variables and passed around to other functions (called higher-order functions)

    document.getElementById('button').addEventListener('click', () => {
        // item clicked
    });

    window.addEventListener('load', () => {
        // window loaded
        // do what you want
    });

    fs.readFile('/file.json', (err, data) => { })
    


*/