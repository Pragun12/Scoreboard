import React, { Component } from 'react';


class Footer extends Component {

  state={
    adding:false
  }

  openForm=()=>{

    this.setState({
      adding:true
    });

  }

  addPlayer=()=>{
    let playerName=this.player.value;
    let score=parseInt(this.score.value);

    let checkForWhiteSpace=playerName.replace(/ /g,'');

    if(checkForWhiteSpace.length){
      
      this.props.addPlayer(playerName,score);

      this.cancel();

    }
    else{
      this.player.focus();
    }
   
  }

  cancel=()=>{
    this.setState({
      adding:false
    })
  }

  displayInput(){
    return(
      <div className="col-sm-12">
      <div className="row">
      <div className="col-sm-6">
      <input type="text" ref={(input)=>{this.player=input}} name="player" 
      placeholder="Player Name" className="form-control" />
      </div>

       <div className="col-sm-6">
      <input type="text" ref={(input)=>{this.score=input}} name="score" 
      placeholder="Score" className="form-control" />
      </div>
      </div>
      
      <div className="spacer10px"></div>
     
      <div className="row">
      <div className="col-sm-6">
      <button onClick={this.addPlayer} type="submit" className="btn btn-primary addBtn" >Add</button>

      <button onClick={this.cancel} type="submit" className="btn btn-danger" >Cancel</button>
      </div>
      </div>
      </div>
    )

  }

  hideInput(){
    return(
      <div className="col-sm-12">

      <button onClick={this.openForm} className="btn btn-success" >Add Player</button>
     </div>
    )
  }

    render() {

      if(this.state.adding){
        return this.displayInput();

      }
      else{
        return this.hideInput();
      }
     
    }
  }
  
  export default Footer;
  