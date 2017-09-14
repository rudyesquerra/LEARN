//module.exports is a special object available in Node application that makes code available through 'require' statements in other files
// ./counter.js

class Counter {
  constructor() {
    this.value = 0
  }
  getValue() {
    return this.value;
  }

  increase() {
    this.value++;
  }

  decrease() {
    this.value--;
  }
}

module.exports = Counter;
