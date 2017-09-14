const request = require('supertest')
const app = require('./App.js')

// Let Jest know to use the mock
jest.mock('./models/word')
jest.mock('./models/quote')

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

  it('Should respond with quote of the day', ()=>{
    return request(app).get('/').then((response)=>{
      expect(response.body.quoteOfTheDay.text).toBe('A great work is made out of a combination of obedience and liberty')
    })
  })

  //Everything else works normally, using the mock
  it('Should respond with word of the day', ()=>{
    return request(app).get('/').then((response)=>{
      expect(response.body.wordOfTheDay.word).toBe('cyberpunk')
      expect(response.body.wordOfTheDay.type).toBe('noun')
      expect(response.body.wordOfTheDay.definition).toBe('computer hacker')
    })
  })
})

it("Creates words", ()=>{
  return request(app)
  .post("/words")
  .send({
    word: "cryptograph",
    type: "noun",
    definition: "secret language system"
  })
  .then(response => {
    expect(response.statusCode).toBe(201)
    expect(response.body.word.word).toBe("cryptograph")
    expect(response.body.word.type).toBe("noun")
    expect(response.body.word.definition).toBe("secret language system")
  })
})

it("Creates quotes", ()=>{
  return request(app)
  .post("/quotes")
  .send({
    text: "give us a quote",
  })
  .then(response => {
    expect(response.statusCode).toBe(201)
    expect(response.body.quote.text).toBe("give us a quote")
  })
})
