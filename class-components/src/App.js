import React, {Component} from 'react';
import './App.css'

class App extends React.Component {
  render() {
    return(
      <div>
        <First/>
        <Second/>
        <Third/>
      </div>
    )
  }
}

class First extends React.Component{
  render(){
    return(
      <div>
        <h1>PBA INSTITUTE</h1>
      </div>
    )
  }
}

class Second extends React.Component{
  render(){
    return(
      <div>
        <h2>shibsankarghosh.wordpress.com</h2>
      </div>
    )
  }
}

class Third extends React.Component{
  render(){
    return(
      <div>
        <h2>Address: HOWRAH - KOLKATA</h2>
      </div>
    )
  }
}

export default App