var i = 0

while  (i < 10) {
  console.log(i);
  i++
}

for (var a=10; a>0; a--) {
  console.log(a);
}


var c = [1, 2, 3]
var d = [2, 30, 1]

function mergeArray(array1, array2) {
  var e = c.concat(d)
  e = e.filter(function(item, index, inputArray) {
    return inputArray.indexOf(item) == index;
  });
  console.log(e);
}

function fillArray(slots, value){
  var arr = [];
  for(i=0; i<slots; i++) {
    arr.push(value);
  }
  console.log(arr);
}



// function ourFilter(array) {
//   for(i=0; i<array.length; i++){
//     if (array[i] != null || array[i] != false || array[i] != 0 || array[i] != ''){
//     return array.push[i];
//     }
//     console.log(array);
//   }
// }

var cleanArr = [58, '', 'abcd', true, null, false, 0]

function notNull(x) {
  if(x != false){
  return x;
  }
}

function cleanFunction(x){
  return cleanArr.filter(notNull);
  console.log(x);
}

var array2 = [];
function findPair(ele, array) {
  for (x=0; x<array.length; x++) {
    for(var y=0; y<array.length; y++){
      if(ele == (array[x] + array[y])) {
        array2.push([x,y]);
      }
    }
  }
  console.log(array2);
}


var highNum = [-2,-56,-1];

function highestNumber() {
  var max = -5;
  highNum.forEach(function(element, index) {
    if(element > max) {
      max = element;
    }
  });
  console.log(max);
}

var highNum = [-2,-56,-1];

function lowestNumber() {
  var max = -5;
  highNum.forEach(function(element, index) {
    if(element < max) {
      max = element;
    }
  });
  console.log(max);
}


var highNum = [2,-56,-1, -32, 15];

function closestNumber() {
  var max = 500;
  highNum.forEach(function(element, index) {
    if(Math.abs((element)) < max) {
      max = element;
    }
  });
  console.log(max);
}

var myTotal = 0;
function sumValue(array){
  for(var i = 0; i < array.length; i++) {
    myTotal += array[i];
     // Iterate over your first array and then grab the second element add the values up
   }
   console.log(myTotal);
}

var myTotal = 0;
var mean = 0
function meanValue(array){
  for(var i = 0; i < array.length; i++) {
    myTotal += array[i];
    mean = myTotal / (array.length);
     // Iterate over your first array and then grab the second element add the values up
   }
   console.log(mean);
}

var highNum = [2,56,10];

function indexNumber() {
  var max = -5;
  highNum.forEach(function(element, index) {
    if(element > max) {
      max = element;
    }
  });
  console.log(max);
}
