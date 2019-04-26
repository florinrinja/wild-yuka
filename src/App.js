import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import M from '../node_modules/materialize-css/dist/js/materialize.js';
import Home from '../src/components/home/Home';
import Scan from './components/scan/Scan';
import './App.css';

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
      height: this.state.height,
    };

    return (
      <div style={style}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Scan" component={Scan}/>
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
