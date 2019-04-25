import React, { Component } from 'react';
import ScanBut from './ScanBut';
import Canvas from './background/Canvas';
import Menu from '../menu/Menu'

class Home extends Component {

  render() {
    return (
      <div>
        <Canvas />
        <ScanBut />
        <Menu />
      </div>
    )
  }
}

export default Home;