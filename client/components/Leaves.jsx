import React from 'react'

export default class Leaves extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      //state
      visible: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

handleClick() {
  this.setState({visible: false})
  console.log('hide')
}

render() {
  return(
    <div>
      <img className={this.state.visible ? 'show' : 'hide'} onClick={() => this.handleClick()} src="../../images/leaf.png" />
    </div>

)
}


}
