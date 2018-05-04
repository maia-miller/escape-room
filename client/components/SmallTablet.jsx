import React from 'react'
import { connect } from 'react-redux'

import {collectSmallTablet} from '../actions/smalltablet.js'
import {toggleLargeTablet} from '../actions/largetablet.js'

import LargeTablet from './LargeTablet.jsx'


class SmallTablet extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this)
  }

handleClick() {
  this.props.dispatch(collectSmallTablet())
  this.props.dispatch(toggleLargeTablet())
}

  render() {
    return(
      <div>
        <img className={this.props.leaves && this.props.smalltabletfound ? 'smalltablet toToolkit' : 'smalltablet'} onClick={() => this.handleClick()} src="../../images/smalltablet.png" />

        {/* {this.props.leaves && this.props.smalltabletfound && <LargeTablet />} */}
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    leaves: state.leaves,
    smalltabletfound: state.smalltabletfound
  }
}

export default connect(mapStateToProps)(SmallTablet)
