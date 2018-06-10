import React from 'react'
import { connect } from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { Pulse } from 'react-motions'

import LevelOne from './LevelOne'
import Homescreen from './Homescreen'

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

      <div>
        <Route exact path='/' component={Homescreen} />
        <Route exact path='/LevelOne' component={LevelOne} />

      </div>

    </Router>
        )
      }
    }
