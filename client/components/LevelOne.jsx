import React from 'react'
import { connect } from 'react-redux'

import Toolbar from './Toolbar'
import Columns from './Columns'
import Leaves from './Leaves'
import SmallTablet from './SmallTablet'

  class LevelOne extends React.Component {
    constructor(props) {
      super (props)
      this.state = {
      }

    }

    render() {
    return(
      <div className='app-container'>
        <Columns />
        <Leaves />
        <SmallTablet />
        <Toolbar />
      </div>
      )
    }
  }


export default connect()(LevelOne)
