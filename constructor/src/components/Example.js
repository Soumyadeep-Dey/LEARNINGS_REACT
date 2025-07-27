import React from "react";

class Example extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {data: "SOUMYADEEP DEY"}
    }
    render()
    {
        return(
            <h1>HELLO {this.state.data}</h1>
        )
    }
}

export default Example