import React from 'react'

export default class Leaves extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      //state
      visible: true
    }
    this.handleClick = this.handleClick.bind
  }

handleClick() {
  this.setState({visible: false})
}

render() {
  return(
    <div>
      <img className={this.state.visible ? 'show' : 'hide'} onClick={() => this.handleClick()} src="../../images/leaf.png" />
    </div>

)
}


}
