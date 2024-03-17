var favoriteFruits = ["Apple", "Banana", "Orange"];
// if(favoriteFruits.includes("Mango")){
//     console.log(`I would you like to eat Mango`);
// }else if(favoriteFruits.includes("Apple")){
//     console.log(`I would you like to eat Apple`);
// }else{
//     console.log(`Fruits are not available!`);
// }
var fruitsAvailable = "Orange";
if (favoriteFruits.includes(fruitsAvailable)) {
    console.log("I would you like to eat ".concat(fruitsAvailable));
}
else {
    console.log("Fruits are not available!");
}
