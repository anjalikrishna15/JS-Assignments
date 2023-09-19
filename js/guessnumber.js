alert("Guess a number(1-100)");
var guesses = [];
var ranNum = Math.floor(Math.random() * 100) + 1;
//console.log(ranNum);
var flag = false;
var attemptNumber = 1
do {
    console.log(ranNum);
    var userGuess = prompt("Attempt number: " + attemptNumber + "\nEnter a number: ");
    guesses.push(userGuess);
    var difference = userGuess - ranNum;
    if (difference === 0) {
        alert("Congrats!!....you guessed correct..")
        flag = true;
        break;
    } else if (difference > 0) {
        alert("Too high")
    } else {
        alert("Too low")
    }
    attemptNumber+=1;

} while (flag === false)

document.writeln("Congrats!!....you guessed correct..")
document.writeln("No of attempts = " + attemptNumber);
document.writeln("Previous guesses are:");
guesses.forEach(element => {
    document.writeln(element)
});