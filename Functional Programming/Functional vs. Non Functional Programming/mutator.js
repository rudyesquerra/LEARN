/*function sorted(array){
  let sortedArray = array.slice()//slice() is a simple way to clone an array.
  sortedArray.sort()//Sorts the elements of an array in place and returns the array.
  return sortedArray
}

let values = [4,2,19,2,33]
console.log(sorted(values)) */

//Try to use some of the mutator methods for yourself in a functional style.

// With the following array of values:
// 1) Add a new value to the beginning of the array.
// 2) Add a new value to the end.
// 3) Reverse the array.
// 4) Sort the array.

let values = [
  "apples",
  "pears",
  "bananas",
  "oranges"
]

function add(array){
  let addArray = array.slice()
  addArray.unshift('strawberry')
  addArray.push('mango')
  addArray.reverse()
  addArray.sort()
  return addArray
}

console.log(add(values))
