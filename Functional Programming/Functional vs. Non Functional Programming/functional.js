let populations = {
  bear: 10000,
  gecko: 6000,
  cat: 45000000
}
//This function changes the state of the systems outside the function. This function changes the state of the object and this can lead to bugs.
// function addPopulation(animal, increase){
//   populations[animal] = populations[animal] + increase
// }

//Now here is a purely functional function

/*This function does not change state, but rather creates a new object, and returns it. It leaves the populations object just as it was before it was called. This is a much safer function to write. You know exactly what the output will be, given known inputs.*/

function addPopulation(animal, increase){
  let newPopulation = populations[animal] + increase
  let myPopulation = Object.assign({}, populations, {[animal]:newPopulation})//Syntax Object.assign(target, ...sources)
  //We are creating a new object called myPopulation, which the source comes from the object populations, and assigns to the property[animal] the new value calculated in newPopulation (which inreases the value).
  return myPopulation
}

console.log(addPopulation('bear', 100))
console.log(populations)
