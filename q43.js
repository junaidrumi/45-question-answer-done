var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicianNames2 = ["Fahad", "Daniyal", "Yawar", "Rehan"];
// making a copy of array
var magicianNamesCopy = __spreadArray([], magicianNames2, true);
function show_magicians(greet) {
    var withGreething = "";
    for (var _i = 0, magicianNamesCopy_1 = magicianNamesCopy; _i < magicianNamesCopy_1.length; _i++) {
        var item = magicianNamesCopy_1[_i];
        withGreething += "".concat(greet, " ").concat(item, "\n");
    }
    return withGreething;
}
;
var myGreethings = show_magicians("Hello");
var makeArray = myGreethings.split("\n");
console.log(makeArray);
// orignal Array
console.log(magicianNames2);
