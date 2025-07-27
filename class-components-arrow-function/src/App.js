import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data:
      [
        {
          "name":"Shib shankar"
        },
        {
          "name":"pallab"
        },
        {
          "name":"Soumya"
        },
        {
          "name":"Tushan"
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <StudentName/>
        <ul>
          {this.state.data.map((item) => 
          <List data = {item} />)}
        </ul>
      </div>
    )
  }
}

class StudentName extends React.Component {
  render() {
    return (
      <div>
        <h1>Students list</h1>
      </div>
    )
  }
}

class List extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.data.name}</li>
      </ul>
    )
  }
}

export default App;