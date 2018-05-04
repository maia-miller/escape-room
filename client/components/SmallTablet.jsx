import React from 'react'
import { connect } from 'react-redux'

import {collectSmallTablet} from '../actions/smalltablet.js'


class SmallTablet extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this)
  }

handleClick() {
  this.props.dispatch(collectSmallTablet())
}

  render() {
    return(
      <div>
        <img className={this.props.leaves && this.props.smalltabletundiscovered ? 'smalltablet' : 'smalltablet toToolkit'} onClick={() => this.handleClick()} src="../../images/smalltablet.png" />
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
