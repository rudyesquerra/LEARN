function greaterNum(num1, num2) {
  if (num1 > num2){
    return num1;
  } else {
    return num2;
  }
}

function helloWorld(language) {
  if (language == "en") {
    return ("Hello, world");
  }
  if (language == "sp") {
    return ("Hola, mundo");
  }
  if (language == "de") {
    return ("Hallo, welt");
  }
  else {
    return ("Hello, world");
  }
}

function assignGrade(numberScore) {
  if(numberScore >= 90) {
    return ("A");
  }
  if (numberScore > 79 && numberScore < 90) {
    return ("B");
  }
  if (numberScore >= 70 && numberScore <= 79) {
    return ("C");
  }
  if (numberScore >= 60 && numberScore <= 69) {
  return ("D");
  }
  else {
  return ("F");
  }
}

function pluralize(noun, number) {
  if(noun == "goose"){
    noun = "geese";
    return(number + " " + noun);
  }
  else return(number + " " + noun + "s");
}

function OddOrEven(number){
  if(number%2 == 0 || number == 0) {
    return(number + " is even")
  }
  else {
    return(number + " is odd")
  }
}

count = 0;
function fizzBuzz() {
  do {
    count = count + 1;
    if(count%3 == 0 && count%5 == 0){
      console.log("FizzBuzz");
    }
    else if(count%3 == 0){
      console.log("Fizz");
    }
    else if(count%5 == 0){
      console.log("Buzz");
    }
    else {
      console.log (count);
    }
  }
  while(count < 100)
}
