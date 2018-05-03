import React from 'react'
import {connect} from 'react-redux'

class Columns extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columnClickCounter: 0,
      sequence: [],
      success: false,
    }
    this.clickColumn = this.clickColumn.bind(this)
  }

  componentDidUpdate() {
    if (this.state.sequence.length >= 3) {
      if (this.state.sequence[0] == "one" && this.state.sequence[1] == "two" && this.state.sequence[2] == "three") {
        this.setState({success: true, sequence: []})
        alert("you win!")
      } else {
        this.setState({sequence: []})
        alert("try again!")
      }
    }
  }

  clickColumn(e) {
    const id = e.target.id
    this.setState(prevState => ({
      sequence: [...prevState.sequence, id]
    }))
  }

  render() {
    return (
      <div>
        <div onClick={this.clickColumn} className={`game-column ${this.state.success == true ? "success" : ""}`} id="one"></div>
        <div onClick={this.clickColumn} className={`game-column ${this.state.success == true ? "success" : ""}`} id="two"></div>
        <div onClick={this.clickColumn} className={`game-column ${this.state.success == true ? "success" : ""}`} id="three"></div>
        <div onClick={this.clickColumn} className="game-column" id="four"></div>
        <div onClick={this.clickColumn} className="game-column" id="five"></div>
        <div onClick={this.clickColumn} className="game-column" id="six"></div>
        <div onClick={this.clickColumn} className="game-column" id="seven"></div>
        <div onClick={this.clickColumn} className="game-column" id="eight"></div>
      </div>
    )
  }
}

export default connect()(Columns)
