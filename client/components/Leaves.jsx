import React from 'react'
import { connect } from 'react-redux'

import {disappearLeaves} from '../actions/leaves.js'


class Leaves extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      // visible: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

handleClick() {
  this.props.dispatch(disappearLeaves())
  // this.setState({visible: false})
}

  render() {
    return(
      <div>
        <img className={this.props.leaves ? 'leaf disappear' : 'leaf'} onClick={() => this.handleClick()} src="../../images/leaf.png" />
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    leaves: state.leaves
  }
}

export default connect(mapStateToProps)(Leaves)
