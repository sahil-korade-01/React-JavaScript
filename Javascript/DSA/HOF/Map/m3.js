




function getInitials(name) {
  const words = name.split(" ");

  const initials = words.map((word) => word.charAt(0));

  return initials.join("");
}

const fullName = "John Doe";
const initials = getInitials(fullName);

console.log("Initials:", initials);






function getI (name){
    const w = name.split(' ')
    const ini = w.map((word)=> word.charAt(0))
    return ini
}

const fllName = "sahil korade"
const result = getI(fllName)
console.log(result);

