var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

document.onkeyup = function(event) {
    console.log("hello");
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    
    if (userGuess == computerGuess) {
        wins++;
        alert('Way to go! You Won!');
        guessesLeft = 9;
        guessesSoFar.length = 0; 
       
        console.log('you won')
    }
    else if (guessesLeft == 0){
        losses++;
        alert('You lost. try again.');
        guessesLeft = 9;
        guessesSoFar.length = 0;
       
        console.log('you lost')
    }
    else if (userGuess !== computerGuess){
        guessesLeft--;
    }  

    
    var html = "<h1>The Psychic Game</h1>" + 
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Total Wins: " + 
    wins + 
    "</p>" +
    "<p>Total Losses: " + 
    losses + 
    "</p>" +
    "<p>Guesses Left: " + 
    guessesLeft + 
    "</p>" +
    "<p>Your Guesses so far: " +
    guessesSoFar +
    "</p>"
    ;
    document.querySelector('#game').innerHTML = html;

}