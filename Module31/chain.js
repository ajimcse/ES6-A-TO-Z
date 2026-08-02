const data = [{ id: 1, name: 'abul', adderss: 'PPI' }]
// console.log(data)
// console.log(data[0].adderss);
const products = {
    count: 5000,
    data: [
        { id: 1, name: 'lwnovo laptop', price: 50000 },
        { id: 1, name: 'macbook', price: 150000 }
    ]
}
// console.log(products.data[1].price)

// const user ={
//     id:8400,
//     name:'ajim',
//     adderss:{
//         pabna:{
//             first:'boroitala',
//             second:'botala',
//             third:'meril baipass'
//         }
//     }
// }
// console.log(user.adderss.pabna.second);

const user2 ={
    id:8400,
    name:'ajim',
    adderss:{
            first:'boroitala',
       
    }
}
console.log(user2.adderss.sterrit?.second)

// ছোট্ট নিয়ম মনে রাখো
// . = অবশ্যই property থাকতে হবে, না হলে Error।
// ?. = থাকলে value দাও, না থাকলে undefined দাও, Error দিও না।

// এটা React এবং আধুনিক JavaScript-এ খুবই বেশি ব্যবহার হয়, তাই
//  এটি ভালোভাবে বুঝে রাখা গুরুত্বপূর্ণ।
const user = {
    name: "Ajim",
    address: null
};

console.log(user.address?.city);