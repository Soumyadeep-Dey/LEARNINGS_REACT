import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { displayBio: false};
    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }
  toggleDisplayBio(){
    this.setState({displayBio: !this.state.displayBio})
  }
  render() {
    return (
      <div>
        <h1 align="center">PBA COMPUTER INSTITUTE</h1>
        {
          this.state.displayBio ? (
            <div>
              <p><h4>PBA INSTITUTE [ AN ISO 9001-2015 CERTIFIED & MSME 
              REGISTERED COMPUTER TRAINING INSTITUTE] IS A PRIVATE 
              COMPUTER TRAINING & COACHING INSTITUTE WITH THE AIM OF
               BRINGING QUALITY PRIVATE TUTORING FOR STUDENTS AT 
               AFFORDABLE RATES IN HOWRAH AND KOLKATA CITY.</h4></p>
               <button onClick={this.toggleDisplayBio}> Show Less </button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}> Read More </button>
            </div>
          )
        }
      </div>
    )
  }
}

export default App;