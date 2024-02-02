// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar 
// Define a function to check if a given year is a leap year
function leapyear(year) {

    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1800));
console.log(leapyear(100));

