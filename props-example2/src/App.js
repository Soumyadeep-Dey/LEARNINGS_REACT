import React from "react";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      name: "PBA INSTITUTE"
    }
  }
  render(){
    return(
      <div>
        <Example eprop={this.state.name}/>
      </div>
    )
  }
}

class Example extends React.Component {
  render(){
    return(
      <div>
        <h3>Welcome to {this.props.eprop}</h3>
        <p>ADVANCE COMPUTER TRAINING INSTITUTE.</p>
      </div>
    )
  }
}

export default App;