// Age difference from the youngest and oldest in map function in js


// const ages = [25, 30, 22, 35, 18];
// const ageDifference = () => {
//   const youngest = Math.min(...ages);
//   const oldest = Math.max(...ages);

//   const differences = ages.map((age) => Math.abs(age - youngest));

//   return differences;
// };

// const differencesArray = ageDifference();
// console.log("Age Differences:", differencesArray);




const ages1 =  [23,45,66,77,67]

 const diffAge = ()=> {
    const you = Math.min(...ages1)
    const old = Math.min(...ages1)
    const payVata = ages1.map(oo => Math.abs(oo - you))
    return payVata
 }
  const result = diffAge(ages1)
  console.log(result);