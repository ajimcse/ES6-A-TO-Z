// console.log('myLoder')

// const promise = new Promise((resolve, reject) => {

//     let success = true;

//     if (success) {
//         resolve("কাজ সফল হয়েছে");
//     } else {
//         reject("কাজ ব্যর্থ হয়েছে");
//     }

// });


const promise = new Promise((resolve, reject) => {
    resolve("Data পাওয়া গেছে");
});

promise
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
 