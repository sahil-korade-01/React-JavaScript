// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  // Define the lengths of the three sides of a triangle
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 

var s = (side1 + side2 + side3) / 2;

var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

console.log(area);






var a = 5
var b = 8 
var c = 9
var d = (a + b+ c)  /2
var area = Math.sqrt((d*(d-a)*(d-b)*(d-c)))
console.log(area);


