var userNames2 = ["Rehan", "Kashif", "Jafar", "Admin", "Zeeshan", "Umar",];
//userNames2 = []
//console.log(userNames2);
if (userNames2.length > 0) {
    for (var i = 0; i < userNames2.length; i++) {
        if (userNames2[i] == "Admin") {
            console.log("\nHello ".concat(userNames2[i], " would you like to see a ststus report?\n"));
        }
        else {
            console.log("Hello ".concat(userNames2[i], " thank you for logging again!"));
        }
    }
}
else {
    console.log("We need to find some users!");
}
