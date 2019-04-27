import React, { Component } from 'react';
import { Button, Modal } from 'react-materialize';
import './ButtonHistory.css';
import Hystory from './Hystory';

export default class ButtonHistory extends Component {

  render() {
    return (
      <Modal header="Mon historique"
        trigger={<Button id='History'
          floating
          large
          className="yellow accent-2"
          // fab={{ direction: 'right' }}
          icon="history"
          waves="light"
          style={{ right: '3%', bottom: '2%', position: 'absolute' }}
        />}
      >
        <Hystory />
      </Modal>
    )
  }
}