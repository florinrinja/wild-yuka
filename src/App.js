import React, { Component } from 'react';
import Home from '../src/components/home/Home'

import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';

class App extends Component {
  
  render() {
    return (
      <div>
      <Home/>
      </div>
      )
  }
}

export default App;
