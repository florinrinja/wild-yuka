import React from 'react';
import { Button, Modal, Switch } from 'react-materialize';

const ButtonTeam = () => {
  return (
    <Modal header="Meet the team" trigger={<Button id='Team'
      floating
      large
      className="yellow accent-2"
      fab={{ direction: 'left' }}
      icon="help"
      waves="light"
      style={{ left: '1%' }}
    />}
    >
      <p>Feature 1</p>
      <Switch offLabel="Off" onLabel="On" />
      <h4>Florin</h4>
      <h4>Juliette</h4>
      <h4>Rachel</h4>
      <h4>Romain</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
			</p>
    </Modal>
  )
}

export default ButtonTeam;