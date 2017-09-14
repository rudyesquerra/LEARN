import React, { Component } from 'react'
import Homes from './store/Homes'
import {Link} from 'react-router-dom'
import Styles from './App.css';



class HomeDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      homes: Homes
    }
  }

componentWillMount(){
  const id = this.props.match.params.id
  this.setState({homeId: id})
  let home = this.state.homes.find(function(listing){
    return listing.id === parseInt(id)
  })
  if(home){
    this.setState({home: home})
 }
}

render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <h2>{this.state.home.name}</h2>
        <h3>{this.state.home.description}</h3>
        <img src = {this.state.home.image} className="pics"/>
      </div>
    );
  }
}

export default HomeDetail;
