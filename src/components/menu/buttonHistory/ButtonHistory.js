import React from 'react';
import { Button, Modal } from 'react-materialize';
import './ButtonHistory.css'

const ButtonHistory = () => {

  return (
    
      <Modal header="Historique" trigger={<Button id='History'
        floating
        large
        className="yellow accent-2"
        fab={{ direction: 'right' }}
        icon="menu"
        waves="light"
        style={{ right: '1%' }}
        />}
        >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </Modal> 
  )
}

export default ButtonHistory;




