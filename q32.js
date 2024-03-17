var current_users = ["Rehan", "Kashif", "jafaR", "Farhan", "Zeeshan", "Umar",];
var new_users = ["Ali", "kashif", "Jamshed", "farhan", "Furqan"];
// we will use forEach method.
new_users.forEach(function (new_user) {
    var new_userLower = new_user.toLowerCase();
    // we will some() method.
    var userNameTaken = current_users.some(function (current_user) {
        return current_user.toLowerCase() === new_userLower;
    }); // true or false
    // now we will apply conditons
    if (userNameTaken) {
        console.log("".concat(new_user, " need to choose new username because it's already taken\n"));
    }
    else {
        console.log("".concat(new_user, " is the new member added"));
        current_users.push(new_user); // add new user to current users array;
    }
});
console.log(current_users);
