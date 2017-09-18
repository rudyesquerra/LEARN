var express = require('express')

// requiring our new body-parser
var bodyParser = require('body-parser')

var app = express()
app.set('view engine', 'ejs')
var fs = require('fs') // this is the new part


//let the app know we want to use body-parser to handle form data
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (request, response) {
  response.render('form-demo')
});

// app.post('/day-update', function(request, response){
//
//   //because we're using body-parser, incoming form data
//   //is found on request.body
//   let responses = request.body
//
//   //In this case, we're just turning around and dispaying the user input
//   response.render('day-update', responses )
// });

app.post('/day-update', function(request, response){
  let responses = request.body

  //open the data.json file, and parse into a JSON Object
  var dayUpdates = undefined
  var rawFile = fs.readFileSync('data.json')
  var dayUpdates = JSON.parse(rawFile)

  dayUpdates.push(responses)

  //time to save the data back to disk
  fs.writeFileSync('data.json', JSON.stringify(dayUpdates))

  response.render('day-update', {responses: dayUpdates})
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
