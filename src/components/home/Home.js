import React, { Component } from 'react';
import M from '../../../node_modules/materialize-css/dist/js/materialize.js';
import ScanBut from './ScanBut';
import Canvas from './background/Canvas';
import Menu from '../menu/Menu'


class Home extends Component {

  render() {
    
    return (
      <div >
        <Canvas />
        <ScanBut />
        <Menu />
      </div>
    )
  }
}

export default Home;
