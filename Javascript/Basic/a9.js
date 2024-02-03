// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.  



function front(str) {

    first = str.substring(0, 2);
    return   first ;
}
console.log(front('a'));
console.log(front('ab'));
console.log(front('abc'));
