var myPlaces = ["uae", "italy", "uk", "china", "usa"];
//console.log(myPlaces);
// making a copy of an arry
var copyOfArry = myPlaces.slice();
var sortedArry = copyOfArry.sort();
//console.log(sortedArry);
// printed of orignal arry
//console.log(myPlaces);
// reversing orignal arry
// first we have make a copy of orignal arry
var copyOfArry2 = myPlaces.slice();
var reverseOriArry = copyOfArry2.reverse();
//console.log(reverseOriArry);
// printed orignal arry
//console.log(myPlaces);
// reverse the order of orignal arry
var reverseOriArry2 = myPlaces.reverse();
//console.log(reverseOriArry2);
var againReverse = reverseOriArry2.reverse();
//console.log(againReverse); // same as orignal arry
// sorting orignal arry
var sortOriArry = myPlaces.sort();
console.log(sortOriArry);
var reversesortedArry = sortOriArry.reverse();
console.log(reversesortedArry);
