import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Form from './Form'
// import GoodRobot from './GoodRobot'
// import Kanyebot from './Kanyebot'
// import BadRobot from './BadRobot'

class App extends Component {

constructor(props) {
  super(props)
  this.state = {
    userData: {
      firstName: 'Bob',
      lastName: 'Mills'
    }
  }
}

updatefirstName(newfirstName){
  this.setState({firstName: newfirstName})
}

updateLastName(newLastName){
  this.setState({lastName: newLastName})
}

  render() {
    return (
      <div>
        <div>
          <Header firstName={this.state.userData.firstName} />
        </div>
        <div>
          <Form userData = {this.state.userData} updatefirstNameProp={this.updatefirstName.bind(this)} updateLastNameProp={this.updateLastName.bind(this)}/>
        </div>

      </div>
    );
  }
}

export default App;

// <div>
//   <GoodRobot firstName={this.state.firstName} />
// </div>
// <div>
//   <BadRobot firstName={this.state.firstName} />
// </div>
// <div>
//   <Kanyebot firstName={this.state.firstName} />
// </div>
