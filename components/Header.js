import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div>
         <h4> {this.props.votes}</h4>
         <h4> {this.props.description}</h4>
         <h4> {this.props.country}</h4>
      </div>
    )
  }
}

export default Header
