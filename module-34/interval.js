
// let num =0
// const interVal = setInterval(() =>{
//   num ++;

//   if( num >=10){
//     clearInterval(interVal)
//   }
//   console.log(num)  
// }, 1000)   

// function tellJoke() {
//   console.log("Why don't scientists trust atoms? Because they make up everything!");
// }

// // ১. প্রতি ২ সেকেন্ড (২০০০ মিলিসেকেন্ড) পর পর tellJoke ফাংশনটি চলবে
// const jokeInterval = setInterval(tellJoke, 2000);

// // ২. ১০ সেকেন্ড (১০০০০ মিলিসেকেন্ড) পর jokeInterval টি বন্ধ হয়ে যাবে
// setTimeout(() => {
//   clearInterval(jokeInterval);
// }, 10000);


const phDataLoad = async () => {
  const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
  const data = await res.json();
  console.log(data)
}
phDataLoad()






// 