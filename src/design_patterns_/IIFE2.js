let autoIncrement = function() {
    console.log("IIFE2 got executed");
    let number = 0;
    return function () {
            number++
            return number
    }
};
console.log(autoIncrement);
console.log(autoIncrement()());
console.log(autoIncrement()());
console.log(autoIncrement()());
console.log(autoIncrement()());

// it seems everytime we do this ===> autoIncrement()()
// a new object is created
// since 4 times we invoked it ===> 4 new objects got created
// so, there are 4 number properties... they arent shared