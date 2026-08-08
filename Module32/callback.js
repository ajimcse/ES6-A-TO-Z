function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function calculate(callback, a, b) {
    return callback(a, b);
}
const result1 = calculate(add, 2, 3);

// console.log(result1);

function changenumber(num){
    num = num +10
    console.log(num)
}
const myNumber=10;
changenumber(myNumber);

console.log( myNumber)
