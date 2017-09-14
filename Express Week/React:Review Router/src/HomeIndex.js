import React, {Component} from 'react'
import Homes from './store/Homes'
import {Link} from 'react-router-dom'
import Content from './Content'

class HomeIndex extends Component {
  componentWillMount(){
    this.setState({homes: Homes})
  }
  render() {
    let list = this.state.homes.map(function(home){
    return(
        <li key={home.id}>
          <Link to={`/homes/${home.id}`}>
            {home.name}
          </Link>
        </li>
      )
    })
    return (
      <div>
        <ul>
          {list}
        </ul>
        <div>
          <Content/>
        </div>
      </div>
    );
  }
}

export default HomeIndex;
