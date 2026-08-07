//  function add (a, b){
//     const total = a + b;
//     // return total
//  }
// const result =add(12,54)
// console.log(result)
// Interview Question:
// Different ways you will get undefined

// undefined পাওয়ার সাধারণ উপায়গুলো হলো:

// Variable declare করা হয়েছে কিন্তু value assign করা হয়নি।

// let x;
// console.log(x);

// Function return না করলে।

// function test() {}
// console.log(test());

// Function parameter না পাঠালে।

// function test(name) {
//     console.log(name);
// }
// test();

// Object-এর এমন property access করলে যা নেই।

// const obj = { name: "Ajim" };
// console.log(obj.age);

// Array-এর এমন index access করলে যা নেই।

// const arr = [10, 20];
// console.log(arr[5]);

// Explicitly undefined assign করলে।

// let value = undefined;
// console.log(value);

// সহজে মনে রাখার ট্রিক
// undefined = "এখনও value দেওয়া হয়নি" (JavaScript নিজে দেয়)
// null = "আমি ইচ্ছা করে value খালি রেখেছি" (Programmer দেয়)

// এটি JavaScript ইন্টারভিউতে সবচেয়ে বেশি জিজ্ঞাসিত মৌলিক বিষয়গুলোর একটি, তাই প্রতিটি উদাহরণ নিজে VS Code-এ চালিয়ে দেখলে ধারণা আরও পরিষ্কার হবে।