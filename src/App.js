import React, { Component } from 'react';
import Home from '../src/components/home/Home'
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import M from '../node_modules/materialize-css/dist/js/materialize.js';
import Menu from './components/menu/Menu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      height: 0,
      width: 0
    };
    window.addEventListener("resize", this.update);
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  render() {

    const style = {
      backgroundColor: '#fffaf2',
      height: this.height
    };

    return (
      <div style={style}>
        <Home />
        <Menu />
      </div>
    )
  }
}

export default App;
