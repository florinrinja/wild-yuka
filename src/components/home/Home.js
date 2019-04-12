
import React, { Component } from 'react';
import ScanBut from './ScanBut';
import Canvas from './background/Canvas';

class Home extends Component {  
  constructor() {
    super();
  }
 render(){
   return (
     <div>
       <Canvas/>
      <ScanBut />
     </div>
   )
 }
}

export default Home;
