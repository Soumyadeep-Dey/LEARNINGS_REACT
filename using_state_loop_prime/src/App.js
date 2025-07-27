import React from "react";

class App extends React.Component
{
  state = {num:5, i:1, c:0}

  constructor()
  {
    super()
  }
  render()
  {
    const { num } = this.state;
    for(this.state.i=1;this.state.i<=num;this.state.i++)
    {
      if(num%this.state.i==0)
      {
        this.state.c++
      }
    }
    if(this.state.c==2)
    {
      return(
        <div>
          <p>PRIME</p>
        </div>
      )
    }
    else
    {
      return(
        <div>
          <p>NOT PRIME</p>
        </div>
      )
    }
  }
}

export default App;
