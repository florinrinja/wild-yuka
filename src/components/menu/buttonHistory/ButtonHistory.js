import React from 'react';
import { Button, Modal } from 'react-materialize';
import './ButtonHistory.css';
import Hystory from './Hystory';

const ButtonHistory = () => {

  return (
    <div>
      <Modal header="Mon historique"
        open={true}
        actions={
          <Button waves="yellow" modal="close" flat >Fermer</Button>
        }
      >
        <Hystory />
      </Modal>
    </div>

  )
}

export default ButtonHistory;