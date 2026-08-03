const numbers =[22,65,32,54,33,57,85,35,90,59 ,78];
const result =numbers.find(num => num >50);
// console.log(result)

const users = [
  { name: "Ajim", active: true },
  { name: "Rahim", active: false },
  { name: "Karim", active: true }
];

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);

// Method	কী Return করে?
// map()	নতুন Array
// filter()	Matching element-এর Array
// find()	প্রথম matching element
// forEach()	undefined
// 
// map() → সবগুলোকে পরিবর্তন করো
// filter() → যেগুলো মিলবে সবগুলো দাও
// find() → প্রথম যেটা মিলবে, সেটা দাও
// 