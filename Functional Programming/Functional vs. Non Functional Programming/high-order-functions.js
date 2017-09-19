// let muppets = [
//   {name: 'Doc', type: 'bear'},
//   {name: 'Fozzie', type: 'bear'},
//   {name: 'Kermit', type: 'frog'},
//   {name: 'Scooter', type: 'human'}
// ]
// //How would we get a list of all the bears in the list above using a for loop?

// var bears = []
// for(var i=0; i < muppets.length; i++){
//   if(muppets[i].type === 'bear'){
//     bears.push(muppets[i].name)
//   }
// }

//This code isn't very functional because its continually manipulating the state of the bears array, and its not declarative either. We're coding the 'how' instead of the 'what'.

// let bears = muppets.filter((muppet)=>{//Using filter(), which is a higher order function, we can be both declarative //and functional. The filter() method creates a new array with all elements that pass the test implemented by the provided function.
//
//   return muppet.type === 'bear'
// })

// let isABear = (muppet) =>  {//Here we create a new variable isABear, and assign a function to it.
//
//   return muppet.type === 'bear'
// }
//
// let bears = muppets.filter(isABear) //Then we pass the variable into the filter function as a callback.
//
// console.log(bears)

// CHALLENGE
//
// 1) Using filter(), refactor the following code from an imperative style to a declarative one:
// 2) Refactor your code to use the same matching function for both signed and unsigned operations

let contracts = [
  {name: "rental agreement", signed: true},
  {name: "car loan", signed: false},
  {name: "health insurance", signed: false},
  {name: "employment", signed: true}
]
//
// // function getSigned(contracts){
// //   let signed = []
// //   for(var i=0; i<contracts.length; i++){
// //     if(contracts[i].signed){
// //       signed.push(contracts[i])
// //     }
// //   }
// //   console.log(signed)
// // }
//
let isSigned = (contract) =>  {//Create a variable and assigned a new function, basically it returns all objects of our array called contracts where the property signed equals true.
  return contract.signed === true
}
let signedContracts = contracts.filter(isSigned) //Passes the variable that we created as a parameter into a new variable that contains the functions that filters our array.

console.log(signedContracts)

// function getUnSigned(contracts){
//   let signed = []
//   for(var i=0; i<contracts.length; i++){
//     if(!contracts[i].signed){
//       signed.push(contracts[i])
//     }
//   }
//   console.log(signed)
// }
//
let notSigned = (contract) => {
  return contract.signed === false
}

let notSignedContracts = contracts.filter(notSigned)
console.log(notSignedContracts)
// //getSigned(contracts)
// getUnSigned(contracts)
