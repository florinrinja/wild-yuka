import React, { Component } from 'react';
import ScanBut from './ScanBut';
import Canvas from './background/Canvas';

class Home extends Component {

  render() {
    return (
      <div>
        <Canvas />
        <ScanBut />
      </div>
    )
  }
}

export default Home;
