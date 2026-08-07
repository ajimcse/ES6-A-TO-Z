/*
// যে value-কে JavaScript boolean-এ convert করলে true হয়, তাকে Truthy value বলে।

if ("Ajim") {
    console.log("Hello");
}
// যে value-কে JavaScript boolean-এ convert করলে false হয়, তাকে Falsy value বলে।
// 
console.log(Boolean("Hello"));      // true
console.log(Boolean(""));           // false
console.log(Boolean(100));          // true
console.log(Boolean(0));            // false
console.log(Boolean([]));           // true
console.log(Boolean({}));           // true
console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false
console.log(Boolean(NaN));          // false
// 
false
0
-0
0n
""
null
undefined
NaN

*/
const x = false;
if(x){
    console.log('value of x is turthy')
} else{
    console.log('value of  x is falsy')
}