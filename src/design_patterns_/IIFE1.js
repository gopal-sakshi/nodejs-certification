let autoIncrement = (function() {
    console.log("IIFE1 got executed");
    let number = 0;
    return function () {
            number++
            return number
    }
})();
console.log(autoIncrement);
console.log(autoIncrement());
console.log(autoIncrement());
console.log(autoIncrement());
console.log(autoIncrement());

