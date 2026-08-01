function add(a, b) {
    const result = a + b;
    return result
}
// const sum =add(10, 20)
// console.log(sum)

const add2 = (a, b) => a + b;

// const sum = add2(10, 34)
// console.log(sum)
const add3 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
// const sum = add3(10, 11, 32, 26);
// console.log(sum)

const difference = (x, y) => x - y;

const differenceResult = difference(21, 8);
// console.log(differenceResult)

const getAge = person => person.name;
const student = { name: 'ajim', age: 45 };

// const age = getAge(student);
// console.log(age)

const getThird = numbers => numbers[5];
const third = getThird([12, 43, 65, 87, 64, 76, 34]);
// console.log(third)


// function subtract(a, b) {
//     return a - b;
// }

// const subtract =( a, b) => a-b;
// const result1= subtract(50,11);
// console.log(result1)

// function isEven(num) {
//     return num % 2 === 0;
// }
const isEven = num => num % 2 === 0;

const isEvenResutl = isEven(10);
// console.log(isEvenResutl)

// function getFullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }

const getFullName = (firstName, lastName) => firstName + " " + lastName;
const firstName = 'ajim';
const lastName = 'sorkar'
const result = getFullName(firstName, lastName);
// console.log(result)

// function getAverage(a, b, c) {
//     const sum = a + b + c;
//     return sum / 3;
// }
const getAverage = (a, b, c) => {
    const sum = a + b + c;
    return sum / 3
}
const result11 = getAverage(12, 42, 55);
// console.log(result11)