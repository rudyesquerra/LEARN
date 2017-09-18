var express = require('express');
var app = express();
app.set('view engine', 'ejs');  // Let Express know we want to use EJS.

var questions = {
  'coronado-bridge':{
    question: "Who was the first person to ever drive over the Coronado bridge?",
    answer: "Ronald Reagan"
  },
  'hotel-del':{
    question: "What is the largest wooden structure in the United States?  (Hint, its located in San Diego)",
    answer: "Hotel Del Coronado"
  },
  'san-diego-county-fair':{
    question: "What was the original name of the San Diego County Fair?",
    answer: "Del Mar Fair"
  },
  'mission-bay':{
    question: "How many visitors come to Mission Bay Park every year?",
    answer: "More than 5 million"
  },
  'la-jolla-playhouse':{
    question: "What famous actor founded the La Jolla Playhouse?",
    answer: "Gregory Peck"
  }
};

app.get('/', function (request, response) {
 response.render('index');
});

app.get('/hello/:name', function(request, response){//The whole function is the controller
  response.render("hello", {'name': request.params['name']}); //send a JS object as a second parameter
});

app.get('/sum', function(request, response){
  response.render('add', {'query': request.query}) //everything from the query to my ejs file
})

app.get('/trivia', function(request, response){
  response.render('questions', {'questions': questions}) //first questions is going to be the name of the view (.ejs file), the second one is the variable in the view (the word inside the less than operator percentage equal) and the last one is the variable that we define at the top of this file.
})

app.get('/answers/:key', function(request, response){
  response.render('answers', {'key': request.params['key'],'questions':questions})
})


app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});
