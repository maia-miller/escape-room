import React from 'react'
import { connect } from 'react-redux'

  class Toolbar extends React.Component {
    constructor(props) {
      super (props)
      this.state = {
      }

    }

    render() {
    return(
      <div className='app-container'>
        <img className="toolbar" src="../../images/toolbar.png"/>
      </div>
      )
    }
  }


export default connect()(Toolbar)
