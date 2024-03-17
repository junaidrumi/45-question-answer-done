var myFriends = ["kashif", "zeeshan", "umar", "kamran", "bilal"];
// 1st method (loop)
//for(let i = 0; i < myFriends.length; i++){
// console.log(`mr. ${myFriends[i]}! you are invited to my dinner on monday\n`);
//}
// 2nd method map
myFriends.map(function (ib) {
    console.log("mr. ".concat(ib, "! you are invited to my dinner on monday\n"));
});
