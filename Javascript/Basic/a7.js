// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.   // Define a function named string_check that takes a parameter str1
function string_check(str1) {
    
    if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') {
    
      return str1;
    }
    
    return "Py" + str1;
  }
  
  
  console.log(string_check("Python"));
  
  
  console.log(string_check("thon"));
  
  