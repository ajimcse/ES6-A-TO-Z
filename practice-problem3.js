// const numbers = [12, 98, 67, 45, 34, 92, 34];

// const squareResult = (arr) => {
//     square =[]
//    for(const ar of arr){
//       square.push(ar*ar)

//    }
//    console.log(square)
// }
// squareResult(numbers);

const averageOfSquares = (arr) => {

    
    const square = [];

    for (const num of arr) {
        square.push(num * num);
    }

   
    let sum = 0;

    for (const num of square) {
        sum += num;
    }

 
    const average = sum / square.length;

    return average;
};

const numbers = [2, 3, 4, 5];

const result = averageOfSquares(numbers);

console.log(result);