var myFriends = ["kashif", "zeeshan", "umar", "kamran", "bilal"];
console.log("due to some personal reason mr. ".concat(myFriends[1], " will not come to my diner"));
myFriends[1] = "rahil";
console.log("new list to my friends who are coming to my diner\n");
for (var i = 0; i < myFriends.length; i++) {
    console.log("".concat(i + 1, ". ").concat(myFriends[i]));
}
