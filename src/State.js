import React, { Component } from 'react'

class State extends Component {
  state = {
    Text: 'w tym roku pokonamy Rosje',
    Error: '',
  }
  handleDataChange = () => {
    console.log('zmiana')
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleDataChange}
          type="text"
          ref="number"
        ></input>
        <p>Odpowiedz: {this.state.text}</p>
      </div>
    )
  }
}
export default State
