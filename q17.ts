const myFriends: string [] = ["kashif","zeeshan","umar","bilal","khalid","saad"];

console.log(`Table is not available i can invite only 2 persons\n`);

// remove all four elements.

let friend1 = myFriends.pop();
console.log(`Sorrr mr. ${friend1} you are not invited!`);

let friend2 = myFriends.pop();
console.log(`Sorrr mr. ${friend2} you are not invited!`);

let friend3 = myFriends.pop();
console.log(`Sorrr mr. ${friend3} you are not invited!`);

let friend4 = myFriends.pop();
console.log(`Sorrr mr. ${friend4} you are not invited!\n`);

for (let i = 0; i < myFriends.length; i++){
    console.log(`mr. ${myFriends[i]} you are still invited`);
}

myFriends.pop();
myFriends.pop();

console.log(myFriends);



