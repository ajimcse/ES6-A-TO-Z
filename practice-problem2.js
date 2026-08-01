const friends =['ajim','sorkar', 'azad', 'babulsorka','ali'];

const eventResult = (arr) =>{
    // console.log(arr)
    const event =[]
    for(const ar of arr){
        if(ar.length %  2===0){
        event.push(ar)
        }
    }
    console.log(event)
}
eventResult(friends)

