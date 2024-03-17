const personName: string = "muhammad junaid";

// lowercase
console.log(personName.toLowerCase());

// uppercase
console.log(personName.toUpperCase());

//titlecase
let firstLetter: string = personName.charAt(0).toUpperCase();
let restLetters: string = personName.slice(1).toLowerCase();

let titlecase = firstLetter + restLetters;

console.log(titlecase);


