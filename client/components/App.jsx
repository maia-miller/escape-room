import React from 'react'
import { connect } from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'

import Homescreen from './Homescreen'
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

      <div>
        <Route exact path='/' component={Homescreen} />
        <Route exact path='/LevelOne' component={LevelOne} />

      </div>

    </Router>
        )
      }
    }
