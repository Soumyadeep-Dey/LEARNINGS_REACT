import React from "react";
import "./App.css"

class App extends React.Component{
    render() {
        return (
            <div>
                <h1 align="center">{this.props.name}</h1>
                <blockquote>
                    <p>
                       I (Shib Shankar Ghosh) have written and developed these notes and programs so that anyone can learn any programming language easily. 
                       I mainly write code for web applications and Mobile app. I also teach people, “How to write code”. 
                       To know more visit: javapba.blogspot.com & facebook.com/pbainst.
                    </p>
                </blockquote>
            </div>
        )
    }
}

export default App;