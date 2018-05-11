import React from 'react'
import { connect } from 'react-redux'

import Leaves from './Leaves.jsx'
import SmallTablet from './SmallTablet.jsx'
import LargeTablet from './LargeTablet.jsx'
import Modal from './Modal.jsx'

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
      <h1>Hello World</h1>
      <Modal />
      <Leaves />
      <SmallTablet />

      {this.props.leaves && this.props.smalltabletfound && this.props.largetablet && <LargeTablet />}

    </div>

        )
      }
    }

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    leaves: state.leaves,
    smalltabletfound: state.smalltabletfound,
    largetablet: state.largetablet
  }
}

export default connect(mapStateToProps)(App)
