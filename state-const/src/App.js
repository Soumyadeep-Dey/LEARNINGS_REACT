import React, { Component } from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { printname: true };
    //this.state = { printname: false };
  }
  render() {
    const p = this.state.printname?
    (
      <div>
        <h1>PBA INSTITUTE</h1>
      </div>
    ) : null;
      return (
        <div>
          { p }
        </div>
      )
  }
}

export default App;