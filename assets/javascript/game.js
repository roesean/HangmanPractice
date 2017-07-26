var numberOfGuesses = 15;
var lettersGuessed = [];
var correctLetters = [];
var words = ["phenoxy","gauzily","flexing"];
var randomInt = Math.floor(Math.random() * ((words.length) - 0) + 0);
var word = words[randomInt];
var keyPressed = "";

function isLetterInWord(letter){
    for(var i = 0; i < word.length; i++){
        if(letter == word[i]){
            return true;
        }
    }
    return false;
}
function gameReset(){
    var newInt = Math.floor(Math.random() * ((words.length) - 0) + 0);
    numberOfGuesses = 15;
    lettersGuessed = [];
    correctLetters = [];
    word = words[newInt];
}

console.log(word);
console.log(numberOfGuesses);

document.onkeydown = function(event){
        keyPressed = event.key;
        console.log(keyPressed);
        if(correctLetters.length == word.length){
            document.querySelector(".game").innerHTML = "<h1>Winner winner chicken dinner<h1>"            
        }
        else if(isLetterInWord(keyPressed)){
            correctLetters.push(keyPressed)
            console.log(correctLetters);
            document.querySelector(".letters-guessed").innerHTML = "<p>"+correctLetters.join(", ")+"</p>"
        }
        else{
            lettersGuessed.push(keyPressed)
            console.log("you are a terrible develpoer");
            document.querySelector(".letters-guessed").innerHTML = "<p>"+correctLetters.join(", ")+"</p>"
        }
    }
    





