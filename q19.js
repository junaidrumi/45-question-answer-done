var myFriends = ["yasir", "nawaz", "bilawal", "ayan", "dilawar"];
console.log("I am inviting ".concat(myFriends.length, " number of friends to my dinner which are following\n"));
for (var i = 0; i < myFriends.length; i++) {
    console.log("".concat(i + 1, ".").concat(myFriends[i]));
}
