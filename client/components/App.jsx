import React from 'react'
import { connect } from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import LevelOne from './LevelOne'

export default class App extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
    }
    //bind
  }
//function

render() {
  return(
    <Router>
      <div className='bg'>
        <Route exact path='/LevelOne' component={LevelOne} />
        <div className='ping'>
          <Link to='/LevelOne'>
          <img className='ping' src='../../images/ping-active.png' />
          </Link>
        </div>
      </div>
    </Router>
        )
      }
    }
