import React, { Component } from 'react';

class BadRobot extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: 'BLABLABLABLABLABLABLABLA'
    }
  }


  render() {
    return (
      <div>
        <h3>Bad Robot&#58;</h3>
        <p>I hear you saying {this.state.firstName.substring(0, this.props.firstName.length)}. Is that correct&#63;</p>
      </div>
    )
  }

}

export default BadRobot;
