var express = require('express')
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())
var Word = require('./models').Word
var Quote = require('./models').Quote

app.get('/', (req, res)=>{
  Quote.findAll({limit: 1}).then((quote)=>{
    Word.findAll({limit: 1}).then((word)=>{
    res.json({
      greeting: "Hello World",
      quoteOfTheDay: quote[0],
      wordOfTheDay: word[0]
    })
  })
})
})

app.post('/words', (req, res)=>{
  Word.create({
    word: req.body.word,
    type: req.body.type,
    definition: req.body.definition
  }).then((word)=>{
    res.status(201)
    res.json({word: word})
  })
})

app.post('/quotes', (req, res)=>{
  Quote.create({
    text: req.body.text
  }).then((quote)=>{
    res.status(201)
    res.json({quote: quote})
  })
})




module.exports = app
