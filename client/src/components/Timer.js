import React, { Component } from 'react';


class Timer extends Component {

  state={
   showingStop:false,
    secondsElapsed:0
  }

  handleStop=()=>{

    this.setState({
      showingStop:false
    });

    clearInterval(this.incrementer);

  }

  handleStart=()=>{

    this.setState({
      showingStop:true
    });

    this.incrementer=setInterval(()=>{
      this.setState({
        secondsElapsed:this.state.secondsElapsed+1
      })
    },1000)
  }

  getSeconds=()=>{
    return ('0'+this.state.secondsElapsed % 60).slice(-2);

  }
  getMinutes=()=>{
    return Math.floor('0'+this.state.secondsElapsed/60);

  }
  

  showStop(){
     
  return(<button className="btn btn-danger btnTimer" onClick={this.handleStop}>Stop</button> )
  }

  showStart(){

    
    return(<button className="btn btn-warning btnTimer" onClick={this.handleStart}>Start</button>)
  }

    render() {


      return (
        <div className="Timer">
         <h4>
           {this.getMinutes()}:{this.getSeconds()}
         </h4>
        {this.state.showingStop?this.showStop():this.showStart()}
         <button className="btn btn-primary">Reset</button> 
        </div>
      );
    }
  }
  
  export default Timer;
  