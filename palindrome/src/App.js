import React from "react";

class App extends React.Component
{
  state = {num:121, m:0, r:0, s:0};

  constructor()
  {
    super();
  }
  render()
  {
    this.state.m=this.state.num;
    this.state.i=1;
    while(this.state.num>0)
    {
      this.state.r=parseInt(this.state.num%10)
      this.state.s=this.state.s*10+this.state.r
      this.state.num=parseInt(this.state.num/10)
    }
    if(this.state.s == this.state.m)
    {
      return(
        <div>
          <p>PALINDROME</p>
        </div>
      )
    }
    else{
      return(
        <div>
          <p>NOT PALINDROME</p>
        </div>
      )
    }
  }
}

export default App