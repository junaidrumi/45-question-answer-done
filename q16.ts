const myFriends: string[] = ["kashif","zeeshan","umar"];
console.log(myFriends);

console.log(`we have 3 more friends invite to on diner\n`);

// adding three more friends
// add at biginning
myFriends.unshift("haris");
console.log(myFriends);

//add middle
myFriends.splice( 2, 0, "hassan");
console.log(myFriends);

//add at last
myFriends.push("bilal");
console.log(myFriends);

// print all friends along with message

for (let i = 0; i < myFriends.length; i++){
    console.log(`mr. ${myFriends[i]} you are invited to my dinner`);
}

