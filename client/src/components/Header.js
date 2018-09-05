import React, { Component } from 'react';
import Title from './Title';
import Timer from "./Timer";

class Header extends Component {

    render() {

      return (
        <div className="col-sm-12 heading">
         <div className="row">

         <div className="col-sm-6 text-left">
         <Title  size={this.props.size}/>
         </div>

         <div className="col-sm-6 text-right">
         <Timer/>
         </div>

         </div>
        </div>
      );
    }
  }
  
  export default Header;
  