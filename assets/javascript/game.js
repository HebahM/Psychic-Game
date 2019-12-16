var numWins = 0;
var numLosses = 0;
var guessesLeft = 9;
var yourGuesses = [];
var chars = "abcdefghiklmnopqrstuvwxyz";
var randomstring = '';
var rnum = Math.floor(Math.random() * chars.length);
randomstring = chars.substring(rnum, rnum + 1);


document.onkeyup = function (event) {
    var userGuess = event.key;
    
    yourGuesses.push(userGuess);
    if (userGuess !== randomstring) {
        if (guessesLeft > 0) {
            guessesLeft--;
        }
    }
    else {
        numWins++;
        yourGuesses = [];
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring = chars.substring(rnum, rnum + 1);
        guessesLeft = 9;

    }
    if (guessesLeft==0) {
        numLosses++;
        yourGuesses = [];
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring = chars.substring(rnum, rnum + 1);
        guessesLeft = 9;
    }
    
    console.log("number of guesses left:")
    console.log(guessesLeft)
    console.log("computer's letter:")
    console.log(randomstring)
    console.log("user's input:")
    console.log(userGuess)
    console.log("wins:")
    console.log(numWins)
    console.log("losses")
    console.log(numLosses)
    document.getElementById("wins").textContent = "Wins: " + numWins;
    document.getElementById("losses").textContent = "Losses: " + numLosses;
    document.getElementById("guesses").textContent = "Guesses left: " + guessesLeft;
    document.getElementById("guessedLetters").textContent = "Your guesses so far: " + yourGuesses;
}


