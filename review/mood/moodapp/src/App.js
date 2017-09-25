import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle'


const green = '#39D1B4';
const yellow = '#FFD712';

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'good' };
    this.toggleMood = this.toggleMood.bind(this);
  }

  toggleMood() {
    const newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  }

  render() {
    return (
      <div>
        <h1>I&#39;m feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
        <Toggle />
      </div>
    );
  }
}

export default Mood;
