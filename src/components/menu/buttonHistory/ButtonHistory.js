import React, { Component } from 'react';
import { Button, Modal } from 'react-materialize';
import './ButtonHistory.css';
import Hystory from './Hystory';



export default class ButtonHistory extends Component {

  render() {
    return (
      <Modal header="Your History"
        trigger={<Button id='History'
          floating
          large
          className="yellow accent-2"
          fab={{ direction: 'right' }}
          icon="menu"
          waves="light"
          style={{ right: '1%' }}
        />}
        >
        <Hystory />
      </Modal>
    )
  }
}