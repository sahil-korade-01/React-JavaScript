// Reverse a String


// function revStr (string){
//     const reverse = string.split("").reverse().join('')
//     return reverse
// }
//  const orgString = "sahil korade"
//  const stringed = revStr(orgString)
//  console.log(`the reverese string is ${stringed}`);










 function r (n){
    const rr = parseInt(n.toString().split("").reverse().join(""))
    return rr

 }
  const oN = 1234
  const finalNumber = r(oN)
  console.log(`the rev num is ${finalNumber}`);