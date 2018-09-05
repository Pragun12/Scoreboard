import React, { Component } from 'react';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class Scoreboard extends Component {

  state={
    players:[]
  }

  addPlayer=(name,score)=>{

    let pl=this.state.players;
    pl.push(
      {
        name:name,
        score:score
      }
    );
    this.setState({
      players:pl
    })

  }

  increaseScore=(score,i)=>{
    let pl=this.state.players;

    
    pl[i].score=parseInt(score)+1;
    
   this.setState({
     players:pl
   })

  }

  decreaseScore=(score,i)=>{
   
    if(score>0){
    let pl=this.state.players;

    
    pl[i].score=parseInt(score)-1;
    
   this.setState({
     players:pl
   })

  }

  }


  deletePlayer=(i)=>{
    let pl=this.state.players;
    pl.splice(i,1);

    this.setState({
      players:pl
    });

  }


    render() {

   
      return (
          
        <div className="container scoreboard">
        <div className="well well-lg">
        <div className="row content">
         <Header size={this.state.players.length}/>
         </div>
         <div className="row content">
         <Body players={this.state.players} increaseScore={this.increaseScore}
          decreaseScore={this.decreaseScore} deletePlayer={this.deletePlayer}/>
         </div>
         <div className="row content">
         <Footer addPlayer={this.addPlayer.bind(this)}/>
         </div>
        </div>
       </div>
      );
    }
  }
  
  export default Scoreboard;
  