let myPlaces: string [] = ["uae","italy","uk","china","usa"];
//console.log(myPlaces);

// making a copy of an arry
let copyOfArry = myPlaces.slice();
let sortedArry = copyOfArry.sort();
//console.log(sortedArry);

// printed of orignal arry
//console.log(myPlaces);

// reversing orignal arry
// first we have make a copy of orignal arry
let copyOfArry2 = myPlaces.slice();
let reverseOriArry = copyOfArry2.reverse();
//console.log(reverseOriArry);

// printed orignal arry
//console.log(myPlaces);

// reverse the order of orignal arry
let reverseOriArry2 = myPlaces.reverse();
//console.log(reverseOriArry2);

let againReverse = reverseOriArry2.reverse();
//console.log(againReverse); // same as orignal arry

// sorting orignal arry
let sortOriArry = myPlaces.sort();
console.log(sortOriArry);

let reversesortedArry = sortOriArry.reverse();
console.log(reversesortedArry);
