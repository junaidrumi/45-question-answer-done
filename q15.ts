const myFriends: string[] = ["kashif","zeeshan","umar","kamran","bilal"];
console.log(`due to some personal reason mr. ${myFriends[1]} will not come to my diner`);
myFriends[1] = "rahil";

console.log(`new list to my friends who are coming to my diner\n`);
for (let i = 0; i < myFriends.length; i++){
    console.log(`${i + 1}. ${myFriends[i]}`);
} 


