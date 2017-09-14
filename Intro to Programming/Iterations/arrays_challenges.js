/*Create a function that finds the index of the highest number.

indexHighestNumber([1,4,2]) should return 1
indexHighestNumber([-1,-2,-4]) should return 0*/

  var myArray = [-1,-200,-4,-8,-6,-90];


  function indexHighestNumber(array) {
    var max = array[0];
    for(var i = 0; i < array.length; i++){
      if(array[i] >= max){
         max = array[i];
         position = array.indexOf(max);
      }
    }
    console.log(position);
  }

// Using Math.max()

var myArray = [-4,-200,-8,-1,-6,-90];

  function getMaxOfArray(numArray) {
    max = numArray.indexOf(Math.max.apply(null, numArray));
    return max;
  }

//Arrays of Strings

//Create an array with your siblings names, and an array with your parents names.

var siblings = ["Hector", "Priscilla", "Javier"];
var parents = ["Hector", "Conchita"];

//Sort your siblings names in alphabetical order.

var siblings = ["Hector", "Priscilla", "Javier"];
siblings.sort();

//Sort your parents names in reverse alphabetical order.

var parents = ["Hector", "Conchita"];
parents.sort();

/*Sort all the names in alphabetical order.
Hint: Combine the arrays into a single array.
Sort all the names in reverse alphabetical order.*/

var siblings = ["Hector", "Priscilla", "Javier"];
var parents = ["Hector", "Conchita"];
var parents = ["Hector", "Conchita"];
parents.sort();
parents.reverse();

//Create a function that determines if a given name is amongst the names.*/

var siblings = ["Hector", "Priscilla", "Javier"];
var parents = ["Hector", "Conchita"];
var family = siblings.concat(parents);

function givenName(name, yourArray){

  for(var i = 0; i < yourArray.length; i++){
    if(name == yourArray[i]){
      return ("I found the name " + name);
    }
  }
};

/*Advanced Functions

Create a function that returns an array with only the even elements from the array.

evenElements([1,2,3,4]) should return [2,4]
Hint: use the % operator
What happens if there are no even numbers? */

var myArray = [1,2,3,4,5,6,7,8,9,10];
var onlyEvenArray = [];

function onlyEven(array){
  for(var i = 0; i < array.length; i++){
    if(array[i]%2 == 0){
      onlyEvenArray.push(array[i]);
    }
  }
  return (onlyEvenArray);
}

/*Create a function that returns an array with only the odd elements from the array.

oddElements([1,2,3,4]) should return [1,3]
oddElements([2,2,6,4]) should return []*/

var myArray = [1,2,3,4,5,6,7,8,9,10];
var onlyEvenArray = [];

function onlyEven(array){
  for(var i = 0; i < array.length; i++){
    if(array[i]%3 == 0 || array[i] == 1){
      onlyEvenArray.push(array[i]);
    }
  }
  return (onlyEvenArray);
}

//Create a function that take an array and a function, and returns a new array
//with return value of the function on each of the elements of the array.
//mapArray([5,6], function(x) { return 2*x; }) should return [10,12]
//Hint: function mapArray(array, fun) { var returnArray = []; ... return returnArray; }
//Hint: use forEach on the given array to append the return value of the
//function applied to each element

var myArray = [5,6];
var myArrayTimesTwo = [];

function double(element) {
  return element*2;
};

function mapArray(array){
   array.forEach(function(element) {
     var a = function double();
     myArrayTimesTwo.push(a);
    });
    return (myArrayTimesTwo);
}
