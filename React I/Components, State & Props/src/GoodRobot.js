import React, { Component } from 'react';

class GoodRobot extends Component {
  render() {
    return (
      <div>
        <h3>Good Robot&#58;</h3>
        <p>I hear you saying {this.props.firstName}. Is that correct&#63;</p>
      </div>
    )
  }

}

export default GoodRobot;
