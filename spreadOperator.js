// const numbers =Math.max(12,42,54,31,11,8,64,3,44,99);
// console.log(numbers)

const numbers = [12,43,645,231,4323,3165,654,34,23]
// console.log(...numbers)
const a = [1, 2];
const b = [...a, 3, 4];

// console.log(b);

const fruits = ["Apple", "Banana"];

const newFruits = [...fruits, 'Mango', 'Orange'];
// console.log(newFruits)

const aa = [1, 2];
const bb = [3, 4];

const c = [...aa, 100, ...bb];

// console.log(c);
// const person = {
//     name: "Ajim",
//     age: 25
// };
// const copy ={
//     ...person
// }
// console.log(person)
// console.log(copy)


const student = {
    name: "Rahim",
    roll: 10
};

const newStudent = {
    ...student,
    roll: 20,
    class: 10
};

console.log(newStudent);