function makeWallet(){
    let money = 100;
    return function(){
        return money
    }
}
const myWallet = makeWallet();
// console.log(myWallet())


function makeDoorLock(secretCode) {
  // secretCode ভ্যারিয়েবলটি বাইরে থেকে সরাসরি বদলানো যাবে না
  
  return function(enteredCode) {
    if (enteredCode === secretCode) {
      return "দরজা খুলে গেছে! Welcome!";
    } else {
      return "ভুল পাসওয়ার্ড! আবার চেষ্টা করুন।";
    }
  };
}

// আমরা '1234' দিয়ে দরজা সেটআপ করলাম
const myDoor = makeDoorLock(1234);

// এখন myDoor ফাংশনটি মনে রেখেছে যে আসল পাসওয়ার্ড ছিল '1234'
console.log(myDoor()); 
// আউটপুট: ভুল পাসওয়ার্ড! আবার চেষ্টা করুন।
console.log(myDoor(1234)); 
// আউটপুট: দরজা খুলে গেছে! Welcome!