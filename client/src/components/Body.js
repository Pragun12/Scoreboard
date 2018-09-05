import React, { Component } from 'react';
import Player from './Player';

class Body extends Component {


  increaseScore=(score,i)=>{

    this.props.increaseScore(score,i);
  
  }

  decreaseScore=(score,i)=>{

    this.props.decreaseScore(score,i);
  
  }
 
  deletePlayer=(i)=>{
    this.props.deletePlayer(i);
  }

    render() {

   
     

     let rows=this.props.players.map((player,i)=>{
      
       return(
       <Player key={i} index={i} player={player} deletePlayer={this.deletePlayer} 
       
       increaseScore={this.increaseScore} decreaseScore={this.decreaseScore}/>
       )
     })

      return (
        <div className="col-sm-12">
         <table className="table score-table">
         <thead>
           <tr>
             <th className="col-sm-8">Players</th>
             <th className="col-sm-4">Score</th>
          </tr>
          </thead>
          <tbody>
              {rows}
            </tbody>
        </table>
        </div>
      );
    }
  }
  
  export default Body;
  