import React from 'react'
import { connect } from 'react-redux'

import Columns from './Columns'

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
      </div>
      )
    }
  }


export default connect()(LevelOne)
