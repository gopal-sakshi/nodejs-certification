let invokeFnExp1 = function() {
    return 3+4;
}

let invokeFnExp2 = function() {
    return function() {
        return 3+4;
    }
}

console.log(invokeFnExp1);
console.log(invokeFnExp2);
console.log('******************************');
console.log(invokeFnExp1());
console.log(invokeFnExp2());