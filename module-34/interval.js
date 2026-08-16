
let num =0
const interVal = setInterval(() =>{
  num ++;

  if( num >=10){
    clearInterval(interVal)
  }
  console.log(num)  
}, 1000)