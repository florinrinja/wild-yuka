import React, { Component } from 'react';
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import M from '../node_modules/materialize-css/dist/js/materialize.js';
import Menu from './components/menu/Menu';
import ModalHistory from './components/modal/modalHistory/ModalHistory'



class App extends Component {
  render() {
    return (
      <div className="App">
			<Menu/>
      </div>
    );
  }
}

export default App;
