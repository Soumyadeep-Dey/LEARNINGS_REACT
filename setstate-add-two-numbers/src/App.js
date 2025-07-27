import "./App.css";
import React from "react";

class App extends React.Component
{
  state = {n1:'',n2:'',t:Number};

  constructor()
  {
    super();
  }

  addtion(){
    this.setState({t: parseInt(this.state.n1) + parseInt(this.state.n2)})
  }
  render()
  {
      return(
        <div className="mainContainer">
          <br/><br/>
          <input type="text" className="inputStyle" value={this.state.n1} onChange={ (eve) =>
            { this.setState({ n1: eve.target.value})}} />
          <br/><br/>
          <input type="text" className="inputStyle" value={this.state.n2} onChange={(eve) =>
            { this.setState({ n2: eve.target.value})}}/>
          <br/><br/>
          <button onClick={()=>{this.addtion()}}>Add Numbers</button>  
          <br/><br/>

          {this.state.t}

          <br/><br/>
        </div>
      )
    }
}

export default App;