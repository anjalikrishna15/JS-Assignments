//1 Converts a specified number to an array of digits
var num = 1234;
var arrayDigit;
var arrayDigit = String(num).split('').map((num) => {
    return Number(num);
});
console.log(arrayDigit);
//2 Removes non-printable ASCII characters from a given string
var str = "Hidd©©©en??Ascii ©©®®®Charac££ter";
str = str.replace(/[^\x00-\x7F]/g, "");
console.log(str);
//3 Write a function that returns true if the provided predicate function 
//returns true for all elements in a collection, false otherwise
function isBig(element, index, array) {
    return (element >= 10);
}
var passed = [12, 5, 8, 130, 44].every(isBig);
console.log("Test Value : " + passed);
var passed = [12, 15, 18, 130, 44].every(isBig);
console.log("Test Value : " + passed);
//4 To Capitalize the first letter of a string
let cap = "hellohrfr";
cap = cap[0].toUpperCase() + cap.substring(1);
console.log(cap);
//i
var arr = [2, 3, 5, 6, 7];
function avg(arr) {
    var sum = 0;
    arr.forEach(function (item, idx) {
        sum += item;
    });
    return sum / arr.length;
}
console.log(avg(arr));
//j
// ANSI escape codes for text colors
const RESET = "\x1b[0m";
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const BLUE = "\x1b[34m";
//  usage
console.log(RED + "Red color" + RESET);
console.log(GREEN + "Green color" + RESET);
console.log(YELLOW + "Yellow color" + RESET);
console.log(BLUE + "Blue color" + RESET);
