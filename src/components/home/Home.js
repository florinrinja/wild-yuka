<<<<<<< HEAD

import React, { Component } from 'react';
import ScanBut from './ScanBut';

class Home extends Component {  
  constructor() {
    super();
  }
 render(){
   return (
     <div>
      <ScanBut />
     </div>
   )
 }
}

export default Home;
=======
import React, {Component} from 'react';
import Canvas from './background/Canvas'

class Home extends Component {
    
    render(){
        return(
            <div>
                <Canvas/>
            </div>
        )
    }
}

export default Home;
>>>>>>> 0b82e4dc0fa758748c80e2928e661bbcf6053603
