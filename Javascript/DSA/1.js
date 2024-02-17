// Find the missing number in a given integer array of 1 to 100



// function miss(array) {
//   const n = 10;
//   const tSum = (n * (n + 1)) / 2;

//   const aSum = array.reduce((re, currentnum) => re + currentnum);

//   return tSum - aSum;
// }

// const input = [1, 2, 3, 4, 5, 6, 8, 9, 10];
// const missA = miss(input);

// console.log(`The missing number is: ${missA}`);


function mi (a){
  const n = 5
  const sum = (n*(n+1))/2
  const asum = a.reduce((r,c)=>r+c)
  return sum - asum;
}
const i = [1,3,4,5]
const m = mi(i)
console.log(m);

