import React from "react";
import "./App.css"

class App extends React.Component
{
  state = {n1:Number, c:Number, i:Number}

  constructor()
  {
    super()
  }

  prime()
  {
    this.state.c=0;
    for(this.state.i=1;this.state.i<=this.state.n1;this.state.i++)
    {
      if(this.state.n1%this.state.i==0)
        this.state.c++;
    }

    if(this.state.c==2)
      alert("PRIME")
    else
      alert("Not Prime")
  }
  render()
  {
    return(
      <div className="mainContainer">
        <br/><br/>
        <input type="text" className="inputStyle" value={this.state.n1} onChange={(eve) =>
          {this.setState({n1: eve.target.value})}
        }></input>

        <br/><br/>

        <button onClick={()=>{this.prime()}}>Prime Check</button>

        <br/><br/>

        <br/><br/>
      </div>
    )
  }
}

export default App;