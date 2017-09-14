import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Styles from './App.css';
import Header from './Header'
import HomeIndex from './HomeIndex'
import Footer from './Footer'
import Homes from './store/Homes'
import HomeDetail from './HomeDetail'
import Content from './Content'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="title">
            <Header title="Luxury bachelor hipster homes"/>
          </div>
          <div  className="pad">
          <Route exact path="/" component={HomeIndex} />
          <Route path='/homes/:id' component={HomeDetail} />
          </div>
          <div>
            <Footer/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
