const request = require('supertest')
const express = require('express')

const app = express()

app.get('/', function(req, res) {
  res.status(200).json({ todaysdate: new Date().toLocaleTimeString()})
})

request(app)
  .get('/')
  .expect('Content-Type', /json/)
  .expect({todaysdate: new Date().toLocaleTimeString()})
  .expect(200)//supertest is calling out to  our application and running expect on the promise that we get back 
  .end(function(err, res) {
    if (err) throw err
  })
