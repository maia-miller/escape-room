import React from 'react'

export default class Leaves extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      visible: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

handleClick() {
  this.setState({visible: false})
}

render() {
  return(
    <div>
      <img className={this.state.visible ? 'leaf' : 'leaf disappear'} onClick={() => this.handleClick()} src="../../images/leaf.png" />
    </div>

)
}


}
