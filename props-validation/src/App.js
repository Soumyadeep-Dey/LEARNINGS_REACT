import React from "react";
import PropTypes from 'prop-types';
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <div class="t1">
        *<table>
          <tr>
            <th>Type</th>
            <th>Value</th>
            <th>Valid</th>
          </tr>
          <tr>
            <td>Array</td>
            <td>{this.props.propArray}</td>
            <td>{this.props.propArray ? "true" : "False"}</td>
          </tr>
          <tr>
            <td>Boolean</td>
            <td>{this.props.propBool ? "true" : "False"}</td>
            <td>{this.props.propBool ? "true" : "False"}</td>
          </tr>
          <tr>
            <td>Function</td>
            <td>{this.props.propFunc(5)}</td>
            <td>{this.props.propFunc(5) ? "true" : "False"}</td>
          </tr>
          <tr>
            <td>String</td>
            <td>{this.props.propString}</td>
            <td>{this.props.propString ? "true" : "False"}</td>
          </tr>
          <tr>
            <td>Number</td>
            <td>{this.props.propNumber}</td>
            <td>{this.props.propNumber ? "true" : "False"}</td>
          </tr>
        </table>
      </div>
    )
  }
}

App.propTypes =
{
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string
}
App.defaultProps =
{
  propArray: [1,2,3,4,5],
  propBool: true,
  propFunc: function(x){return x+5},
  propNumber: 1,
  propString: "PBA INSTITUTE"
}

export default App;