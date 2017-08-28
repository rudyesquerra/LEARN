function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}



var random = getRandomIntInclusive(0,100);
var userGuess;
var count = 0;
var name;

name = prompt("What's your name?");
do {
  userGuess = prompt("Make a guess");
 if (userGuess < random){
        alert("Too Low, please guess again")
        count = count + 1;
  }
  if (userGuess > random){
        alert("Too High, keep guessing")
        count = count + 1;
  }
  if (userGuess == random){
      alert(name + " You Win!")
      break
  }
  if (isNaN(userGuess) == true) {
    alert("Sorry, use a number")
  }
} while (random !== userGuess && count < 7);
