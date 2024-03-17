var personName = "muhammad junaid";
// lowercase
console.log(personName.toLowerCase());
// uppercase
console.log(personName.toUpperCase());
//titlecase
var firstLetter = personName.charAt(0).toUpperCase();
var restLetters = personName.slice(1).toLowerCase();
var titlecase = firstLetter + restLetters;
console.log(titlecase);
