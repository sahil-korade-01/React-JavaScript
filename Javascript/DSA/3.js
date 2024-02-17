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



function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
  
    // Compare the original cleaned string with its reverse
    return str === str.split('').reverse().join('');
  }
  
  // Example usage:
  const testString = "saas";
  if (isPalindrome(testString)) {
    console.log(`${testString} is a palindrome.`);
  } else {
    console.log(`${testString} is not a palindrome.`);
  }
  