var myFriends = ["kashif", "zeeshan", "umar", "bilal", "khalid", "saad"];
console.log("Table is not available i can invite only 2 persons\n");
// remove all four elements.
var friend1 = myFriends.pop();
console.log("Sorrr mr. ".concat(friend1, " you are not invited!"));
var friend2 = myFriends.pop();
console.log("Sorrr mr. ".concat(friend2, " you are not invited!"));
var friend3 = myFriends.pop();
console.log("Sorrr mr. ".concat(friend3, " you are not invited!"));
var friend4 = myFriends.pop();
console.log("Sorrr mr. ".concat(friend4, " you are not invited!\n"));
for (var i = 0; i < myFriends.length; i++) {
    console.log("mr. ".concat(myFriends[i], " you are still invited"));
}
myFriends.pop();
myFriends.pop();
console.log(myFriends);
