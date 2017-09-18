var express = require('express')
var app = express();

app.get('/', (req, res)=>{
  res.json({greeting: "Hello World"})
})

module.exports = app
