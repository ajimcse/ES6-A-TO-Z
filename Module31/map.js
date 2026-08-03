// const numbers = [1, 2, 3, 4, 5];

// const dobul = numbers.map(num => num * 2);
// console.log(dobul)

const numbers = [1, 2, 3, 4, 5];

const double =  num => num *2;

// const reslut =numbers.map(double);
// console.log(reslut)
const fiveBonus = numbers.map(num => num  +5);
// console.log(fiveBonus)
const friends =['tom', 'jerry', 'ajim', 'sokrar']
// const reslut =friends.map(frind => frind.length);
// console.log(reslut)
// const reslut =friends.map(frind => frind[0]);
// console.log(reslut)

const users = [
  { name: "Ajim", age: 25 },
  { name: "Rahim", age: 30 }
];

// const result = users.map(user => user.name);
const result = users.map(user => user.age);
console.log(result);



// অবশ্যই। React শেখার আগে map() দিয়ে কী কী করতে হয়, সেটা নিচে লিস্ট আকারে দিলাম।

// map() দিয়ে যা যা করা হয়
// ১. সংখ্যার উপর কাজ করা
// const numbers = [1, 2, 3];

// const result = numbers.map(num => num * 2);

// ✅ Double করা, Square করা, যোগ-বিয়োগ করা।

// ২. String পরিবর্তন করা
// const names = ["ajim", "rahim"];

// const result = names.map(name => name.toUpperCase());

// ✅ বড় হাতের করা, ছোট হাতের করা, শেষে " Sir" যোগ করা।

// ৩. Object থেকে নির্দিষ্ট Property বের করা
// const users = [
//   { name: "Ajim", age: 25 },
//   { name: "Rahim", age: 30 }
// ];

// const result = users.map(user => user.name);

// Output:

// ["Ajim", "Rahim"]
// ৪. নতুন Object তৈরি করা
// const users = [
//   { name: "Ajim", age: 25 }
// ];

// const result = users.map(user => ({
//   ...user,
//   country: "Bangladesh"
// }));
// ৫. React-এ List Render করা ⭐ (সবচেয়ে বেশি)
// users.map(user => (
//   <h2>{user.name}</h2>
// ))
// ৬. দাম (Price) পরিবর্তন করা
// const prices = [100, 200, 300];

// const result = prices.map(price => price + 50);
// ৭. Boolean Result তৈরি করা
// const numbers = [10, 20, 30];

// const result = numbers.map(num => num > 15);

// Output:

// [false, true, true]
// ৮. Date বা Text Format করা
// const names = ["ajim", "rahim"];

// const result = names.map(name => `Mr. ${name}`);

// Output:

// ["Mr. ajim", "Mr. rahim"]
// মনে রাখার মূল কথা

// map() ব্যবহার করবে যখন:

// ✅ একটি Array আছে।
// ✅ প্রতিটি element-এর উপর একই ধরনের কাজ করতে হবে।
// ✅ নতুন Array দরকার।