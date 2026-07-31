const glass = {
    name: 'glass',
    color: 'golden',
    price: 20,
    isCleand: true
}
// console.log(glass)
// const keys= Object.keys(glass);
// console.log(keys)
// const values = Object.values(glass);
// console.log(values)
const entries = Object.entries(glass);
// console.log(entries)
// delete glass.isCleand;

// Object.freeze(glass);
Object.seal(glass);
console.log(glass)
glass.source= 'Bangladesh';
console.log(glass)