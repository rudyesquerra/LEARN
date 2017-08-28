import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Content from './Content'
import Columns from './Columns'
import Footer from './Footer'
import neoData from './sample-neo'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apiUrl: "http://api.open-notify.org/iss-now.json",
      rawData : neoData,
    }
  }

  componentWillMount(){
    var self = this;
    fetch(this.state.apiUrl).then(function(response){
      return response.json()
    }).then(function(response) {
      self.setState({rawData: response})
    })
  }
  
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Content / >
        </div>
        <div>
          <Columns />
        </div>
        <div className="coordinates">
          <h3>International Spacestation Location</h3>
          <h6>Timestamp: {this.state.rawData.timestamp}</h6>
          <h6>Longitude: {this.state.rawData.iss_position.longitude}</h6>
          <h6>Latitude: {this.state.rawData.iss_position.latitude}</h6>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}


export default App;
