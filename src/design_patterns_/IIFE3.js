let autoIncrement = function() {
    let number = 0;
    return function () {
            number++
            return number
    }
};
console.log(autoIncrement);
console.log(autoIncrement());
console.log(autoIncrement());
console.log(autoIncrement());
console.log(autoIncrement());

