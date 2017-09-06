class RegistrationStore{
  constructor(){
    this.fields = {
      firstName:'',
      lastName:'',
      email:'',
      password:''
    }
    this.errors = {}
  }

  getFields(){
    return this.fields
  }

  getErrors(){

    return this.errors

  }

  validate(){
    this.errors = {password:[]}
    this.validatePresence('firstName')
    this.validatePresence('lastName')
    this.validateEmail('email')
    this.validatePassword('password')
    this.validatePasswordAlpha('password')
    this.validatePasswordLength('password')
    console.log(this.errors)

  }

  validatePresence(fieldName){
    if(this.fields[fieldName] === ''){
      this.addError(fieldName, 'is Required')
    }
  }


  validateEmail(fieldName){
    const filter = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/
    if(!filter.test(this.fields[fieldName])){
      this.addError(fieldName, 'is not an email')
    }
  }

  validatePassword(fieldName){
    if(this.fields[fieldName] === ''){
      this.addError(fieldName, 'is Required')
    }
  }

  validatePasswordAlpha(fieldName){
    const alpha = /^(?=.*[a-zA-Z])(?=.*[0-9])/
    if (!alpha.test(this.fields[fieldName])){
        this.addPassError(fieldName, 'Use both alpha and numeric characters')
    }
  }

  validatePasswordLength(fieldName){
    if(this.fields[fieldName].length < 8){
      this.addPassError(fieldName, ' Enter a password at least 8 characters long')
    }
  }


  addError(fieldName, message){
    this.errors[fieldName] = message
    }


  addPassError(fieldName, passMessage){
    this.errors[fieldName].push(passMessage)
    }
  }

const store = new RegistrationStore()
export default store
