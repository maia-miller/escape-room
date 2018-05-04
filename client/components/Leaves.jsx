import React from 'react'

import {disappearLeaves} from '../actions/leaves.js'

export default class Leaves extends React.Component {
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
        <img className={this.props.leaves ? 'leaf' : 'leaf disappear'} onClick={() => this.handleClick()} src="../../images/leaf.png" />
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return(
    leaves: state.leaves
  )
}
