let magicianNames2 = ["Fahad","Daniyal","Yawar","Rehan"];

// making a copy of array

let magicianNamesCopy = [...magicianNames2];

function show_magicians(greet: string){
 let withGreething = "";

    for(let item of magicianNamesCopy){
      withGreething +=  `${greet} ${item}\n`;
    }
    return withGreething;
};
let myGreethings = show_magicians("Hello");
let makeArray = myGreethings.split(`\n`);
console.log(makeArray);

// orignal Array
console.log(magicianNames2);