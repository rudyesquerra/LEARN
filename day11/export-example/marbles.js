// ./marble.js

const Counter = require('./counter');

let marbleCounter = new Counter()

function reportMarbleCount(count) {
  console.log("My marble count is now", count)
}

console.log("Welcome to a game of marbles.")
reportMarbleCount(marbleCounter.getValue())

console.log("You give me one of your marbles.")
marbleCounter.increase()

reportMarbleCount(marbleCounter.getValue())
console.log("I give you one of my marbles.")

marbleCounter.decrease()
reportMarbleCount(marbleCounter.getValue())
