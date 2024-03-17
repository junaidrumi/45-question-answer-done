let current_users = ["Rehan","Kashif","jafaR","Farhan","Zeeshan","Umar",];

let new_users = ["Ali","kashif","Jamshed","farhan","Furqan"];

// we will use forEach method.
new_users.forEach(new_user =>{
    let new_userLower = new_user.toLowerCase();

    // we will some() method.
let userNameTaken = current_users.some(current_user => 
    current_user.toLowerCase() === new_userLower); // true or false

    // now we will apply conditons
    if(userNameTaken){
        console.log(`${new_user} need to choose new username because it's already taken\n`);
    }else{
        console.log(`${new_user} is the new member added`);
        current_users.push(new_user)  // add new user to current users array;
    }


});
console.log(current_users);
