let fruits = [
  {name: 'oranges', preference: 'like'},
  {name: 'oranges', preference: "don't like"},
  {name: 'oranges', preference: "don't like"},
  {name: 'oranges', preference: 'like'}
]

function describe(array){
  for(var i=0; i<array.length; i++){
    console.log(`I ${array[i].preference} ${array[i].name}`) //We use string interpolation which is easier and more //intuitive than string concatenation
    // Template literals are enclosed by the back-tick (` `) (grave accent) character instead of double or single quotes. Template literals can contain place holders. These are indicated by the Dollar sign and curly braces (${expression}). The expressions in the place holders and the text between them get passed to a function. The default function just concatenates the parts into a single string.
  }
}

describe(fruits)
