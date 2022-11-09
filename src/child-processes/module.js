var interval;
interval = setInterval(function(){
    console.log( 'module data' );
    if(interval._idleStart > 5000) clearInterval(interval);
}, 1000);
console.log(process.argv);