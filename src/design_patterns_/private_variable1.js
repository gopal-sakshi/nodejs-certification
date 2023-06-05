const autoIncrementer = (function() {
    let value = 0;  
    return {
        incr() { value++ },
        get value() { return value }
    };
})();

