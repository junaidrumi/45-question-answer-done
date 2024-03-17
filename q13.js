//const myTransport: string [] = ["bike","car","bus","truck","trian"];
// 1st medhod (loop)
//for (let i = 0; i < myTransport.length; i++) {
//console.log(`i would like to own a ${myTransport[i]}`);
//}
// 2nd method
var myTransport = ["bike", "car", "bus", "truck", "trian"];
myTransport.map(function (ib) {
    console.log("i would like to own a ".concat(ib));
});
