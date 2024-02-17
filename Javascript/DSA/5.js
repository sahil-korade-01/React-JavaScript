// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

// function evenNumber (num ){
//     const evenNum = num.filter (n => n % 2 !==0)
//     return evenNum
// }
//  const newArr = [1,2,3,4,5,6,7,8,9]
//  const reu = evenNumber(newArr)
//  console.log(reu);







function evenNumber (number){
    const evenNum = number.filter(num => num %2 ===0)
    return evenNum
}
  const newArr = [1,2,3,4,5,6,7,8,9]
  const result = evenNumber(newArr)
  console.log(`The even number is ${result}`);




  function oddNumber (number){
    const oddNum = number.filter(num => num % 2 !==0)
    return oddNum
  }
   

   const newArr1 = [1,2,3,4,5,6,7,]
    const result1 = oddNumber(newArr1)
      console.log(`The odd number is ${result1}`);
