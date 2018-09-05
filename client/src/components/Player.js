import React, { Component } from 'react';


class Player extends Component {
    increaseScore=()=>{
       this.props.increaseScore(this.score.value,this.props.index);
    }


    decreaseScore=()=>{
        this.props.decreaseScore(this.score.value,this.props.index);
     }
 
     deletePlayer=()=>{
         this.props.deletePlayer(this.props.index)
     }

  render() {
     
    return (
      
       <tr>
        <td>
       
         <a className="btn btn-danger btn-circle" onClick={this.deletePlayer}>X</a>

           {this.props.player.name}
        </td>
        <td>
          <button onClick={this.increaseScore} className="btn btn-default"> + </button>
          <input ref={(input)=>{this.score=input}} type="text" name="score" 
          className="form-control score-input" value={this.props.player.score} readOnly/>
          <button onClick={this.decreaseScore} className="btn btn-default"> - </button>
          </td>
      </tr>
      
    );
  }
}

export default Player;
