import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="card text-center">
          <h4>What is your name, pilot?</h4>
          <form onSubmit={this.props.setPilot}>
              <input type="text" name="tempPilot" onKeyUp={this.props.inputAction} placeholder="Enter your name"/>
              <br/>
              <input type="submit" value="Submit" disabled={!this.props.tempPilot}/>
          </form>
          <h2>{this.props.pilot}</h2>
      </div>
    )
  }
}
export default Form;
