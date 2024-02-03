// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.  

function character(str, char) {

    p1 = str.substring(0, char);

    p2 = str.substring(char + 1, str.length);

    return (p1 + p2);
}


console.log(character("sahil", 0));


console.log(character("Sahil", 3));


console.log(character("sahil", 5));
