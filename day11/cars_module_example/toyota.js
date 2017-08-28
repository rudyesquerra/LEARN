const Car = require('./car');
class Toyota extends Car{
  // <!-- Story: As a programmer, I can speed my Toyotas up by 7 per acceleration. -->
  accelerate(){
    if(this.speed != 0){
        this.speed += 7
    }
  }
  // <!-- Story: As a programmer, I can slow my Toyotas down by 5 per braking. -->
  decelerate(){
    if(this.speed != 0){
        this.speed -= 5
    }
  }
}
let myToyota = new Toyota()
myToyota.model = 2007

let myToyota2 = new Toyota()
myToyota2.model = 1967

myToyota.start()
console.log('accelerating')
myToyota.accelerate()
console.log('speed:', myToyota.speed)
myToyota.decelerate()
console.log('speed:', myToyota.speed)

myToyota2.start()
console.log('accelerating')
myToyota2.accelerate()
console.log('speed:', myToyota.speed)
myToyota2.decelerate()
console.log('speed:', myToyota.speed)
