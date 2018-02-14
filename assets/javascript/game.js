var simpsons = ["homer", "marge", "bart", "lisa", "maggie", "milhouse", "moe", "apu", "ned"];
var alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var blanksAndSuccess = [];
var currentWord = "";
var currentLetters = [];

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 12;
var blanks = 0

var guessedLetter = [];
var correctLetter = [];
var incorrectGuess = [];


currentWord = simpsons[Math.floor(Math.random() * simpsons.length)];


blanks = currentLetters.length;
  for (var i = 0; i < blanks; i++) 
    blanksAndSuccess.push("_")

console.log(currentWord)