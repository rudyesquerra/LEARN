const Car = require('./car');

class Tesla extends Car{
  constructor(){
    super()
    this.info = `Wheels: ${this.wheels}, Model: ${this.model}, Lights On: ${this.lights}, Signal: ${this.signal}, Current Speed: ${this.speed}`
    this.model = 2016
    }
  // <!-- Story: As a programmer, I can speed my Teslas up by 10 per acceleration. -->
  accelerate(){
    if(this.speed != 0){
        this.speed += 10
        }
      }
  // <!-- Story: As a programmer, I can slow my Teslas down by 7 per braking. -->
  decelerate(){
    if(this.speed != 0){
        this.speed -= 7
      }
    }
  }

  let myCar = new Car()

  let myTesla = new Tesla()
  myTesla.model = 2018
  let myTesla2 = new Tesla()
  myTesla2.model = 2016

  myTesla.start()
  console.log('accelerating')
  myTesla.accelerate()
  console.log('speed:', myTesla.speed)
  myTesla.decelerate()
  console.log('speed:', myTesla.speed)
