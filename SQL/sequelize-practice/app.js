let connection = require('./models/sequelize-connection')
let Country = require('./models/country')

// connection.authenticate()
//   .then(function(){
//     console.log('success!')
//   })
//   .catch(function(error){
//     console.log(error)
//   })


  // Country.findById(1).then(function(country){
  //   // Do anything we like with the country object
  //   console.log(country.get())
  // }).catch(function(error){
  //   console.log(error)
  // })

//   Country
//   .all({limit: 10})
//   .then(function(countries){
//   let mapped = countries.map(function(country){
//     return country.get()
//     })
//   console.log(mapped)
// })

//
// Country.all({
//   where: {
//     continent: 'Europe'
//   }
// })
//
// .then(function(countries){
//   let mapped = countries.map(function(country){
//     return country.get() //Countries is the table, where we use the map method (loop) that creates a new array using country.get() as the values in each position inside the new array.
//   })
//   console.log(mapped)
// })
//
// Country.findById(1)
//   .then(function(country){
//     country.name = country.name.toLowerCase(); // <-- this is where we update its values
//     return country.save() // a promise
//   })
//   .catch(function(error){
//   })

// let neverland = Country.build({
//   code: 'NLD',
//   name: 'Neverland',
//   continent: 'Asia',
//   region: 'Peter Pan'
// })
// neverland.save()
//   .then(function(){
//     //whatever you need to do afterwards
//   })
//   .catch(function(error){
//   })

// Country.all({
//   where: {
//     region: 'Peter Pan'
//   }
// })
//   .then(function(records){
//     let promises = records.map(function(country){
//       return country.destroy()
//     })
//
//     return Promise.all(promises)
//   })
//   .then(function(results){
//     console.log("They're gone!")
//   })


Country.all({
  where: {
    code: 'Europe'
  }
})

.then(function(countries){
  let mapped = countries.map(function(country){
    return country.get() //Countries is the table, where we use the map method (loop) that creates a new array using country.get() as the values in each position inside the new array.
  })
  console.log(mapped)
})
