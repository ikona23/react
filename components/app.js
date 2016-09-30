import React, { Component } from 'react'

var divStyle = {
  color: 'white',
  fontSize:'1.2em',
  background: 'rgb(117, 196, 153)',
  textAlign: 'center',
  border:'1px solid black'
};


class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div style={divStyle}>
        <h1>hello from navBar</h1>
      </div>
    )
  }
}

export default App
