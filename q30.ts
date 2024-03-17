let userNames: string[] = ["Rehan","Kashif","Jafar","Admin","Zeeshan","Umar",];

for(let i = 0; i < userNames.length; i++){
    if(userNames[i] == "Admin"){
        console.log(`\nHello ${userNames[i]} would you like to see a ststus report?\n`);

    }else{
        console.log(`Hello ${userNames[i]} thank you for logging again!`)
    }
}
