import React from 'react'
import {connect} from 'react-redux'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <div>
        <div>sidebar</div>
      </div>
    )
  }
}

export default connect()(Sidebar)
