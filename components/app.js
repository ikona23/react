import React, { Component } from 'react'
import Profile from './profile'
import Camera from './Camera'
import Header from './Header'

var divStyle = {
  color: 'white',
  fontSize:'1.2em',
  background: 'rgb(32, 21, 42)',
  textAlign: 'center',
  border:'1px solid black',
  fontFamily: 'Lato',
  fontWeight: '400'
};

var divImage = {
  width:'60px',
  height: '60px'
};


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      logo: 'https://cloud.githubusercontent.com/assets/3063500/18814098/66241696-836c-11e6-9d34-a77cf3119c38.png',
        Camera:[
          {
            votes:"1",
            description:"dummy",
            title:"webcam",
            timestamp:"2016-09-09T15:23:27.124000",
            query:"MR814",
            country:"US"
          },
          {
            votes:"1",
            description:"dummy",
            title:"webcam",
            timestamp:"016-05-15T02:44:46.831000",
            query:"default password",
            country:"JP"
          }
          ]
    }
  }
  renderList () {
      return this.state.camera.map((Camera) => {
        console.log('list', Camera)
        return <div>{Camera.country}</div>
              console.log('list', Camera)
      })
    }

  render () {
    return (
      <div style={divStyle}>
        <header />
      <h2>Votes:{this.state.Camera.votes}</h2>
      <h2>Description: {this.state.Camera.description}</h2>
      <h2>Country: {this.state.Camera.country}</h2>
      console.log(props);
       <Header name={this.state.Camera.description} logo={this.state.Camera.country}/>

<hr/>

          {/* <h2>Votes: {this.state.Camera[0].votes}</h2>
          <h2>Description: {this.state.Camera[0].description}</h2>
          <h2>Title: {this.state.Camera[0].title}</h2>
          <h2>Timestamp: {this.state.Camera[0].timestamp}</h2>
          <h2>Query: {this.state.Camera[0].query}</h2>
          <h2>Country: {this.state.Camera[0].country}</h2>
        <hr/>
          <h2>Votes: {this.state.Camera[1].votes}</h2>
          <h2>Description:{this.state.Camera[1].description}</h2>
          <h2>Title: {this.state.Camera[1].title}</h2>
          <h2>Timestamp: {this.state.Camera[1].timestamp}</h2>
          <h2>Query: {this.state.Camera[1].query}</h2>
          <h2>Country: {this.state.Camera[1].country}</h2> */}
      </div>
    )
  }
}


export default App
