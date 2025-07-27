import React from "react";
import "./App.css";

class App extends React.Component
{
  state = {n:Number, c:Number, i:Number, m:Number, j:Number}

  constructor()
  {
    super()
  }

  armstrong()
  {
    this.state.c=0;
    this.state.m=this.state.n;
    while(this.state.m!==0)
    {
      this.state.m=Math.floor(this.state.m/10);
      this.state.c++;
    }
    this.state.m=this.state.n;
    this.state.j=0
    while(this.state.m!==0)
    {
      this.state.i=this.state.m%10;
      this.state.j=this.state.j+Math.pow(this.state.i,this.state.c);
      this.state.m=Math.floor(this.state.m/10);
    }
    console.log(this.state.j)
    console.log(this.state.n)
    if(this.state.j==this.state.n)
      alert("Armstrong Number")
    else
      alert("Not Armstrong Number")
  }

  render()
  {
    return(
      <div className="mainContainer">
        <br/><br/>
        <input type="text" className="inputStyle" value={this.state.n} onChange={(eve) =>
          {this.setState({n: eve.target.value})}
        }></input>

        <br/><br/>

        <button onClick={()=>{this.armstrong()}}>Armstrong Check</button>

        <br/><br/>

        <br/><br/>
      </div>
    )
  }
}

export default App;