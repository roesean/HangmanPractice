var numberOfGuesses = 8;
var numberOfWins = 0;
var lettersGuessed = [];
var correctLetters = [];
var words = ["phenoxy", "gauzily", "flexing"];
var word = words[Math.floor(Math.random() * (words.length))];
var wordSpaces = [];
var keyPressed = "";
var success = new Audio("audiofile");
var fail = new Audio("audiofile");
var loss = new Audio("audiofile");
var win = new Audio("audiofile");

function createBlanks() {
    for (var i = 0; i < word.length; i++) {
        wordSpaces.push("_");
    }
}

function isLetterInWord(letter, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (letter == arr[i]) {
            return true;
        }
    }
    return false;
}

function letterIndex(letter) {
    for (var i = 0; i < word.length; i++) {
        if (letter == word[i]) {
            return i;
        }
    }
}

function gameBtnClick() {
    gameReset();
    gameStart();
}

function gameStart() {    
    createBlanks();
    document.querySelector(".startHeader").innerHTML = "Press any key to get started!";
    document.querySelector(".number-of-wins").innerHTML = "<h4>Number of Wins</h4><p>" + numberOfWins + "</p>";
    document.querySelector(".number-of-guesses").innerHTML = "<h4>Number of Guesses Left</h4><p>" + numberOfGuesses + "</p>";
    document.querySelector(".correct-word").innerHTML = "<p>" + wordSpaces.join(" ") + "</p>";
    document.querySelector(".letters-guessed").innerHTML = "<h3>Letters Guessed</h3><p>" + correctLetters.join(" ") + "</p>";
}

function gameReset() {
    numberOfGuesses = 8;
    lettersGuessed = [];
    correctLetters = [];
    wordSpaces = [];
    word = words[Math.floor(Math.random() * (words.length))];
}

gameStart();

document.onkeydown = function (event) {
    keyPressed = event.key;
    document.querySelector(".startHeader").innerHTML = "";
    if (correctLetters.length == (word.length - 1)) {
        numberOfWins++;
        var index = letterIndex(keyPressed);
        wordSpaces.splice(index, 1, keyPressed);
        document.querySelector(".number-of-wins").innerHTML = "<h4>Number of Wins</h4><p>" + numberOfWins + "</p>";
        document.querySelector(".correct-word").innerHTML = "<p>" + wordSpaces.join(" ") + "</p>";
        document.querySelector(".startHeader").innerHTML = "<h2>Winner winner chicken dinner<h2>";
        win.play();
    }
    else if (isLetterInWord(keyPressed, word)) {
        if (isLetterInWord(keyPressed, correctLetters)) {
            alert("You already used that letter");
        }
        else {
            var index = letterIndex(keyPressed);
            correctLetters.push(keyPressed);
            wordSpaces.splice(index, 1, keyPressed);
            document.querySelector(".correct-word").innerHTML = "<p>" + wordSpaces.join(" ") + "</p>";
            success.play();
        }
    }
    else {
        if (isLetterInWord(keyPressed, lettersGuessed)) {
            alert("You already used that letter");
        }
        else {
            lettersGuessed.push(keyPressed)
            numberOfGuesses--;
            document.querySelector(".number-of-guesses").innerHTML = "<h4>Number of Guesses Left</h4><p>" + numberOfGuesses + "</p>";
            document.querySelector(".letters-guessed").innerHTML = "<h4>Letters Guessed</h4><p>" + lettersGuessed.join(" ") + "</p>";
            fail.play();
        }
    }
    if (numberOfGuesses == 0) {
        document.querySelector(".game").innerHTML = "<h2>Better Luck Next time Champ!<h2>";
        loss.play();
    }
    document.querySelector(".spongBob").innerHTML = "<img width='100%' src='images/sb"+numberOfGuesses+"0.png'>"
}






