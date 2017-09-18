var express = require('express');
var app = express();
var reverse = require('reverse-string');
let cookieParser = require('cookie-parser');
app.use(cookieParser());


// app.get('/', function (request, response) {
//  response.send('Hello World!');
// });

// app.get('/',
//   function(request, response){
//     console.log("the cookies", request.cookies)
//     response.send("Hello World")
//   })

  app.get('/',
  function(request, response){

    //we read cookies from the request
    let pageVisits = parseInt(request.cookies.pageVisits) || 0

    //we set cookies on the response
    response.cookie('pageVisits', pageVisits + 1)

    response.send("Hello World. Page Visits:" + pageVisits )
  })

// app.get('/hello/:name/:surname', function (request, response) {
//   var name = request.params["name"]
//   var surname = request.params["surname"]
//  response.send('Hello ' + name + " " + surname + '. Welcome!');
// });
//
// //process.argv[2] is going to be the port number we choose after typing node apps.js, and with this method, we ensure that we can work in a more flexible way instead of keeping locked to a specific port number.
// app.listen(process.argv[2], function () {
//   console.log('Example app listening on port ' + process.argv[2]);
//
// });

// app.get('/:reverse/:text', function (request, response) {
//   var reverse = request.params["reverse"];
//   var text = request.params["text"];
//   var splitText = text.split("");
//   var reverseText = splitText.reverse();
//   var joinText = reverseText.join("");
//   response.send(joinText);
// });
//
// app.listen(process.argv[2], function () {
//   console.log('Example app listening on port ' + process.argv[2]);
//
// });

// app.get('/:text', function (request, response) {
//   var text = request.params["text"]; //In this case, we are using a module that let us reverse a string using the method "reverse" inside our node_modules folder
//   var reverseText = reverse(text);
//   response.send(reverseText);
// });
//
// app.listen(process.argv[2], function () {
//   console.log('Example app listening on port ' + process.argv[2]);
//
// });

// app.get('/add/:number1/:number2', function (request, response) {
//   var number1 = request.params['number1'];
//   var number2 = request.params['number2'];
//   var sum = parseInt(number1) + parseInt(number2); //First we needed to convert the text into numbers using the parseInt method, and once we add those elements, we then convert them into a string or else it would error "Invalid status code" and the sum would actually be that code number.
//   var sumString = sum.toString();
//   response.send(sumString);
// });
//
// app.listen(process.argv[2], function () {
//   console.log('Example app listening on port ' + process.argv[2]);
//
// });

// app.get('/piglatin/:text', function (request, response) { //For this challenge we used the code of the previous pig latin excercise
//   var text = request.params['text'];
//   var splitText = text.split(" ");
//   function pigLatin (inputArray) {
// //runs through every word in the array
//     for (var i = 0; i < inputArray.length; i++) {
//       inputArray[i] = inputArray[i] + "-";
//   //use RegExp to check the word for vowels or consonants
//         let vowelWords = new RegExp('^[aeiou]', 'i');
//         let consonantWords = new RegExp('^[b-df-hj-np-tv-z]', 'i');
//   //after first consonant is moved to back, check if u is at beginning
//         let quWords = new RegExp('q$'&&'^u', 'i');
//         let specialChr = new RegExp('[.,!?]');
//   //for vowels, add -way to end
//         if (vowelWords.test(inputArray[i])) {
//            inputArray[i] = inputArray[i] + "way";
//   //for consonants
//         }
//           else if (consonantWords.test(inputArray[i])) {
//               while(consonantWords.test(inputArray[i])){
//               inputArray[i] = inputArray[i].substring(1) + inputArray[i].substring(0, 1);
//               }
//               if (quWords.test(inputArray[i])){
//                 inputArray[i] = inputArray[i].substring(1) + inputArray[i].substring(0, 1)
//               }
//             inputArray[i] = inputArray[i] + "ay";
//         }
//         if(specialChr.test(inputArray[i])){
//           var position = inputArray[i].search(specialChr);
//           console.log(position)
//           inputArray[i] = inputArray[i].substring(0, position) +inputArray[i].substring(position+1, inputArray[i].length) + inputArray[i].substring(position,position+1)
//         }
//     }
//       return inputArray.join(" ")
//   }
//
//   var word = pigLatin(splitText);
//   response.send(word);
// });

app.listen(process.argv[2], function () {
  console.log('Example app listening on port ' + process.argv[2]);

});
