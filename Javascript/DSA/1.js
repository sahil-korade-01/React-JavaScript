// Find the missing number in a given integer array of 1 to 100


function miss (array ){
    let n = 10
    let sum = (n*(n+1))/2
    let tSum = array.reduce((result , currentElement)=>result + currentElement)
    return sum - tSum
}


 let Array = [1,2,3,4,5,6,8,9,10]
 let missNumber = miss(Array)
 console.log(`The missing number is : ${missNumber}`);

