import React from 'react'

import reactDom from 'react-dom'

class App extends React.Component {
  render() {
    return(
      <div>
        <Greeter name = 'Peter' />
        <Greeter name = 'Nani' />
        <Greeter address = 'Nani' />
        <Greeter address = '1A Palm Grove' />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    )
  }
}

class Greeter extends React.Component {
  render(){
    console.log('props', this.props);
    return (
      <div>
          <h1> Hi {this.props.name}</h1>
          <h1> Hi {this.props.address}</h1>
      </div>
     )
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        count: 0
      }
    }
    increaseCount(){
      this.setState({count: this.state.count + 1})
    }
    render(){
      return <h2 onClick={() => this.increaseCount()}> My count is: {this.state.count} </h2>
    }
  }


  reactDom.render(<App/>,document.querySelector('main'))
// import React from 'react'
// import reactDom from 'react-dom'
// // import App from './components/app'
//
//
// class App extends React.Component {
//   render() {
//     return <Greeter name='peter' />
//     return <Greeter name='nani' />
//   }
// }
// //Greeter is template data is props
// class Greeter extends React.Component {
//   render(){
//     return <h1>Hi {this.props.name}</h1>
//   }
// }
//
// class Counter extends React.Component {
//   constructor(props){
//     super(props)
//     this.state={
//       count:0
//     }
//   }
//
// //set state couse page refresh, only use set state to refresh
//   increaseCount(){
//     this.setState({count:this.state.count + 1})
//   }
//   render(){
// //if we click increase count
//     return<h2 onClick => {this.increaseCount()}> My count is: {this.state.count} </h2>
//   }
// }
// render(<App name='react' />, document.querySelector('main'))
// console.log('welcome to react')
