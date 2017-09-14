import React, { Component } from 'react';

class Form extends Component {
      constructor(props){
      super(props)
      this.state = props.userData
    }

  // handleChange(inputText){
  //   // this.props.updatefirstNameProp(inputText.target.value);
  //   console.log(inputText.target.value);
  // }
  //
  // handleChangeLastName(inputText){
  //   this.props.updateLastNameProp(inputText.target.value);
  // }

handleUpdate(event) {
      this.setState({[event.target.name]: event.target.value})
        console.log(event.target.value)
    }

  handleSubmit(e){
      console.log(this.state.firstName.toUpperCase());
      console.log(this.state.lastName.toUpperCase());
      e.preventDefault()
    }

  render() {
    return (
      <div>
        <p>Say something</p>
        <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input name="firstName" value={this.state.firstName} onChange={this.handleUpdate.bind(this)}/>
          <input name="lastName" value={this.state.lastName} onChange={this.handleUpdate.bind(this)}/>
          <input type='submit' value='click here' />
        </form>
      </div>
      </div>
    );
  }
}
export default Form;
