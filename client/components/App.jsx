import React from 'react'
import { connect } from 'react-redux'

import LevelOne from './LevelOne'

class App extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
    }
    //bind
  }
//function

render() {
  return(
    <div className='app-container'>
      <LevelOne />
    </div>
        )
      }
    }



export default connect()(App)
