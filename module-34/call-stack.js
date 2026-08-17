// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 1000);

// console.log("C");

function a() {
    console.log('a')
    b()
    console.log('aa')
}

function b() {
    console.log('b')
    c()

}
function c() {
    console.log('c')
    console.log('cc')
}
a()