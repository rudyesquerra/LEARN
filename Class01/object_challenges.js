//Car Object Challenge
//Story 1

//Create a function that creates car objects which have a make, model year,
//and color.

function createNewCar(newMake, newModelYear, newColor) {  // begin createNewCar
  return {                        // begin object
    make: newMake,
    model: newModelYear,
    color: newColor
  };                              // end object
}                                 // end createNewCar

//Add a function that returns make, model year, and color as one string and use
//the method to tell the user the car's information.

function createNewCar(newMake, newModelYear, newColor) {  // begin createNewCar
  return {                        // begin object
    make: newMake,
    model: newModelYear,
    color: newColor,
    getData: function() {         // begin function
      return this.make+"-"+this.model+"-"+this.color;
    }
  };
}                             // end object

//Story 2

//The car can accelerate, brake, and tell you its speed.

//Challenges:

//Add a speed variable to the closure of the car object.
//Add the following functions to the object:
//getSpeed: returns current speed
//accelerate: increases the speed by 10mph (but does not return anything)
//brake: decreases the speed by 7mph (but does not return anything)

function createNewCar(newMake, newModelYear, newColor, newSpeed) {  // begin createNewCar
  return {                        // begin object
    make: newMake,
    model: newModelYear,
    color: newColor,
    speed: newSpeed,
    accelerate: function(){
       this.speed += 10;
    },
    brake: function(){
       this.speed -= 7;
      },
    getData: function() {         // begin function
      return this.make+"-"+this.model+"-"+this.color;
    },
    getSpeed: function() {
          return this.speed;
        },
    increaseSpeed: function(){
      for(var i = this.speed; i <= 70; i++){
        console.log(this.speed = i);
      }
    },
    decreaseSpeed: function(){
      for(var j = this.speed; j>-1; j--){
        console.log(this.speed = j);}
    }

  };
}                             // end object

  while (corolla.speed<= 75){
    corolla.accelerate()
  }

var initialspeed = corolla.speed
  for(var j = corolla.speed; j >= 0; j = j-(Math.random()*(initialspeed/2))){
    console.log(corolla.speed = j);}
