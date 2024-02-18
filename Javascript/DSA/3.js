// Write a JavaScript function to check if a given num is a palindrome in js








// function isPalindromeNumber(num) {
//   const numStr = num.toString();

//   return numStr === numStr.split("").reverse().join("");
// }

// const testNumber = 12321;
// if (isPalindromeNumber(testNumber)) {
//   console.log(`${testNumber} is a palindrome.`);
// } else {
//   console.log(`${testNumber} is not a palindrome.`);
// }


// function pal (num) {
//     const numStr = num.toString()
//     return numStr === numStr .split("").reverse().join("")

// }

// const Number = 123432
// if (pal(Number)){
//     console.log(`${Number} the number is palindrom `);}
//     else{ 
//         console.log(`${Number} the number is not palindrom`);

//     }



// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
  
//     // Compare the original cleaned string with its reverse
//     return str === str.split('').reverse().join('');
//   }
  
//   // Example usage:
//   const testString = "saas";
//   if (isPalindrome(testString)) {
//     console.log(`${testString} is a palindrome.`);
//   } else {
//     console.log(`${testString} is not a palindrome.`);
//   }


// function    isPalindrom (str){
//      return str === str.split("").reverse().join("")
// }

//  const  newString = "korade"
//  if(isPalindrom(newString)){
//     console.log(`the given string is palindrom ${newString}`);
//  }
//  else{
//     console.log(`the given string is not palindrom ${newString}`);
//  }
  




function isPalindrom (str){
   return str === str.split("").reverse().join("")

}
const newString = "chima"
if(isPalindrom(newString)){
    console.log(`the "${newString}" string is palindrom `);
}
else{
    console.log(`the "${newString}" string is not palindrom`);
}



// function   ispalindrom (num ){
//     const nump = num.toString()
//     return nump === nump.split("").reverse().join("")


// }

// const newNumber = 121
// if(ispalindrom(newNumber)){
//     console.log(`the ${newNumber} number is palindrom `);

// }
// else{
//     console.log(`the ${newNumber} number is not palindrom`);
// }



// function isPalindrom (num ){
//     const numb = num.toString()
//     return numb ===numb.split("").reverse().join("")

// }

// const newNumber = 123
// if(isPalindrom(newNumber)){
//     console.log(`the ${newNumber} is palindrom`);
// }
// else{
//     console.log(`the ${newNumber} is not palindrom`);
// }



function isPalindrom   (num){
    const isN = num.toString()
    return isN ===isN.split("").reverse().join("")

}

const number = 1234
if(isPalindrom(number)){
    console.log(`the ${number} is palindrom `);
}
else{
    console.log(`the ${number} is not palindrom `);
}