class Car{
        constructor(){
          this.wheels = 4
          // <!-- Story: As a programmer, I can tell which model year a vehicle is from. Model years never change.
          // Hint: Make model year part of the initialization. -->
          this.model = 2017
          // <!-- Story: As a programmer, I can determine if the lights are on or off. Lights start in the off position. -->
          this.lights = false
          // <!-- Story: As a programmer, I can signal left and right. Turn signals starts off. -->
          this.signal = "off"
          // <!-- Story: As a programmer, I can determine the speed of a car. Speed starts at 0 km/h. -->
          this.speed = 0
          this.info = `Wheels: ${this.wheels}, Model: ${this.model}, Lights On: ${this.lights}, Signal: ${this.signal}, Current Speed: ${this.speed}`
        }

        start(){
                 this.speed = 50
               }

        stop(){
                 this.speed = 0
               }
        // <!-- Story: As a programmer, I can turn on and off the lights on a given Car.
        // Hint: Create method(s) to allow programmer to turn lights on and off. Which class are the methods in? -->
        lightsOn(){
           this.lights = true
         }

         lightsOff(){
           this.lights = false
         }

         signalLeft(){
            this.signal = "left"
         }

         signalRight(){
            this.signal = "right"
         }

         signalOff(){
            this.signal = "off"
         }

         // <!-- Story: As a programmer, I can call upon a car to tell me all it's information.
         // Hint: Implement carInfo method on one or more classes. You can call a super class's carInfo with super. -->
         carInfo(){
           this.info = `Wheels: ${this.wheels}, Model: ${this.model}, Lights On: ${this.lights}, Signal: ${this.signal}, Current Speed: ${this.speed}`
         }
      }

      module.exports = Car;
