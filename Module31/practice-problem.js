// const numbers = [1, 3, 5, 7, 9]
// let even = []
// for (const num of numbers) {
//     if (num % 2 === 1) {
//         even.push(num + 1)

//     }
// }
// console.log(even)

// const numbers = [1, 3, 5, 7, 9]

// const  result = numbers.map(num => num + 1);
// console.log(result)

const numbers = [33, 50, 79, 78, 90, 101, 30];

// const result = numbers.filter(num => num % 10 ===0);
// console.log(result)
const reslut = numbers.find(num => num % 10 === 0)
// console.log(reslut)

//  practice-problem2========================================

const instructor = [
    { name: 'ajim', age: 28, position: 'senior' },
    { name: 'sorkar', age: 30, position: 'senior' },
    { name: 'kalam', age: 25, position: 'junior' },
    { name: 'sabul', age: 32, position: 'senior' }
]

// for(const arr of instructor){
//    if(arr.position ==='senior'){
//     console.log(arr)
//    }
// }
const seniorInstuctor = instructor.filter(person => person.position === 'senior');
// console.log(seniorInstuctor)


const people = [
    { name: 'ajim', age: 28, position: 'senior' },
    { name: 'sorkar', age: 30, position: 'senior' },
    { name: 'kalam', age: 25, position: 'junior' },
    { name: 'sabul', age: 32, position: 'senior' }
];
// let sum = 0
// for (const person of people) {
//       sum = sum + person.age

// }
// console.log(sum)
const sum = people.reduce((total, person) => {
    return total + person.age;
}, 0);

console.log(sum);