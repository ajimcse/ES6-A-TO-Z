// const { use } = require("react")

// const user = {
//     name: 'ajim',
//     job: 'Developar',
//     selary: 50000,
//     age: 25
// }
// javaScript Object Notation (JSON)
// JSON.stringify(user)
// const stringifed = JSON.stringify(user)
// console.log(stringifed)

const shop = {
    owner: 'Ajim',
    address: {
        street: 'pabna',
        city: 'Rajshahi',
        country: 'Bangladsh'
    },
    products: ['Laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
// console.log(shop)
const shopJSON =JSON.stringify(shop)
console.log(shopJSON)
const shopObj = JSON.parse(shopJSON)
console.log(shopObj)