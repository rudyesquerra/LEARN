const request = require('supertest')
const app = require('./App.js')

describe('Test the root path', ()=>{
  it('Should respond to GET', () => {
    return request(app).get('/').then((response)=>{
      expect(response.statusCode).toBe(200)
    })
  })

  it('Should respond with a greeting of "Hello World"', ()=>{
    return request(app).get('/').then((response)=>{
      expect(response.body.greeting).toBe('Hello World')
    })
  })
})
