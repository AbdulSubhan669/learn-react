import React, { Component } from 'react';
import {Child} from './Child';

export class App extends Component {
  constructor(){
      super();
  }



  render(){
 
    return (
      <div> 
        This is from the Root Component
        <Child data="Data passed from parent component"></Child>
      </div>
    ); 
  }
}


