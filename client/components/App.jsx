import React from 'react'
import { connect } from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { Pulse } from 'react-motions'

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

        <Pulse duration={4} infinite>
          <div className='ping'>
            <Link to='/LevelOne'>
              <img className='ping levelone' src='../../images/ping-active.png' />
            </Link>

            <Link to='/LevelTwo'>
              <img className='ping leveltwo' src='../../images/ping-inactive.png' />
            </Link>

            <Link to='/LevelThree'>
              <img className='ping levelthree' src='../../images/ping-inactive.png' />
            </Link>

            <Link to='/LevelFour'>
              <img className='ping levelfour' src='../../images/ping-inactive.png' />
            </Link>

            <Link to='/LevelFive'>
              <img className='ping levelfive' src='../../images/ping-inactive.png' />
            </Link>

            <Link to='/LevelSix'>
              <img className='ping levelsix' src='../../images/ping-inactive.png' />
            </Link>

          </div>

        </Pulse>
      </div>
    </Router>
        )
      }
    }
