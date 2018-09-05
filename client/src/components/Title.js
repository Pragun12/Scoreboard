import React, { Component } from 'react';


class Title extends Component {
    render() {
      return (
        <div className="title">
         <h2>Scoreboard</h2>
         <h4>No of Players : {this.props.size}</h4>
        </div>
      );
    }
  }
  
  export default Title;
  