import React, { Component } from 'react'
import Profile from './profile'

var divStyle = {
  color: 'white',
  fontSize:'1.2em',
  background: 'rgb(32, 21, 42)',
  textAlign: 'center',
  border:'1px solid black'
};


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      profile: [
        {
        id:'1',
        name: 'peter',
        surname: 'kona',
        age: '38',
        job:['student','dad']
        },
        {
        id:'2',
        name: 'kubo',
        surname: 'kona',
        age: '11',
        job:['son','student']
        },
        {
        id:'3',
        name: 'nani',
        surname: 'kona',
        age: '35',
        job:['mum', 'vet']
        },
      ]

    }
  }
  render () {
    return (
      <div style={divStyle}>
          <h1>Name: {this.state.profile[0].name}</h1>
          <h1>Surname: {this.state.profile[1].surname}</h1>
          <h1>Age: {this.state.profile[1].age}</h1>
          <h1>Job: {this.state.profile[1].job[0]} & {this.state.profile[1].job[1]}</h1>
        <hr/>
          <h1>Name: {this.state.profile[0].name.toUpperCase(0)}</h1>
          <h1>Surname: {this.state.profile[0].surname}</h1>
          <h1>Age: {this.state.profile[0].age}</h1>
          <h1>Job: {this.state.profile[0].job[0]} & {this.state.profile[0].job[1]}</h1>
        <hr/>
          <h1>Name: {this.state.profile[2].name.toString().toUpperCase()}</h1>
          <h1>Surname: {this.state.profile[2].surname}</h1>
          <h1>Age: {this.state.profile[2].age}</h1>
          <h1>Job: {this.state.profile[2].job[0]} & {this.state.profile[2].job[1]}</h1>
        <hr/>
      </div>
    )
  }
}

function capLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default App
