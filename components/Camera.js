import React from 'react'

class Camera extends React.Component {
  render() {
    console.log('hello', this.props);
    <div>
     <h4> {this.props.title}</h4>
     <h4> {this.props.votes}</h4>
     <h4> {this.props.description}</h4>
     <h4> {this.props.country}</h4>
     </div>
  }
}

export default Camera
