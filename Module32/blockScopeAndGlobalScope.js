/*
Interview-তে যেভাবে বলবে

Global Scope:

Global scope-এ declare করা variable পুরো program থেকে access করা যায়।

Block Scope:

let এবং const দিয়ে declare করা variable শুধু {} block-এর ভিতরে ব্যবহার করা যায়।

Hoisting:

Hoisting হলো JavaScript-এর এমন আচরণ, যেখানে execution-এর আগে declaration memory-তে তোলা হয়। var-এর initial value undefined হয়, আর let/const declaration-এর আগে access করলে ReferenceError আসে কারণ তারা Temporal Dead Zone-এ থাকে।
*/


// let age= 25;
// console.log(age)
// console.log(name);

// var name = "Ajim";
var city = "Dhaka";

console.log(city);

city = "Rajshahi";

console.log(city);
