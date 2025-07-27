import React from "react";
import "./App.css"

let time = new Date().toLocaleString();
class App extends React.Component
{
  render() {
    return (
      <h1 className="mainContainer">
        {time}
      </h1>
    )
  }
}

export default App;