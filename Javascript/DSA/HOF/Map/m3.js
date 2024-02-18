




function getInitials(name) {
  const words = name.split(" ");

  const initials = words.map((word) => word.charAt(0));

  return initials.join("");
}

const fullName = "John Doe";
const initials = getInitials(fullName);

console.log("Initials:", initials);





function mouse (aie){
    const baba = aie.split( " ")
    const gargi = baba.map(mi => mi.charAt(0))
    return gargi 
}

const miRattakli = "hirvya panat chad chad challi"
const hirvyaPanat = mouse(miRattakli)
console.log(hirvyaPanat);