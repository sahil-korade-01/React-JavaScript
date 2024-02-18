// Find the missing number in a given integer array of 1 to 100


// function miss (array ){
//     let n = 10
//     let sum = (n*(n+1))/2
//     let tSum = array.reduce((result , currentElement)=>result + currentElement)
//     return sum - tSum
// }


//  let Array = [1,2,3,4,5,6,8,9,10]
//  let missNumber = miss(Array)
//  console.log(`The missing number is : ${missNumber}`);




//  function missNumber (array){
//   const n = 10
//   const sum = (n*(n+1))/2
//   const tsum =array.reduce((result , currentElement)=> result+ currentElement)
//   return sum - tsum

//  }


//    const newArr = [1,2,3,4,5,6,7,9,10]
//    const result = missNumber(newArr)
//    console.log(`${result}`);





  // function   missingNumber (array){
  //    const n = 10
  //    const sum = (n*(n+1))/2
  //    const totalSum = array.reduce((result,currentElement)=> result + currentElement)
  //    return sum -totalSum
  // }

  //   const newArr = [1,2,3,4,5,6,7,9,10]
  //   const result = missingNumber(newArr)
  //   console.log(result);



  // function missNumber (array){
  //   const n = 5
  //   const sum = (n*(n+1))/2
  //   const totalSum = array.reduce((result , currentElement)=> result + currentElement)
  //   return sum -totalSum
  // }

  // const newArray = [ 1,2,3,5]
  // const result = missNumber(newArray)
  // console.log(`the missing number is ${result}`);











  function missingNumber (arr){
    const n = 10 
    const sum = (n*(n+1))/2
    const totalSum = arr.reduce((result , currentElement) => result + currentElement)
    return sum - totalSum
  }

  const newArr = [1,2,3,4,5,6,7,8,10]
  const result = missingNumber(newArr)
  console.log(`the missing value is in this array is ${result}`);