import React, { Component, createContext, useState } from 'react';
import { Button, Modal } from 'react-materialize';
import './ButtonHistory.css';
import Hystory from './Hystory';

export const CountCtx = createContext([]);

const ButtonHistory = () => {
  const [storage, setStorage] = useState(JSON.parse(localStorage.getItem('myCodes')));

  return (
    <CountCtx.Provider value={[storage, setStorage]}>
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
        actions={
          <Button waves="yellow" modal="close" flat >Fermer</Button>
        }
      >
        <Hystory />
      </Modal>
    </CountCtx.Provider>
  )
}

export default ButtonHistory;