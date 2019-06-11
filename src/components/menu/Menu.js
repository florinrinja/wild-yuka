import React, { useState } from 'react';
import ButtonHistory from '../menu/buttonHistory/ButtonHistory';
import ButtonTeam from '../menu/buttonTeam/ButtonTeam';
import { Button } from 'react-materialize';

const Menu = () => {

  const [show, setShow] = useState(false);

  return (
    <div >
      <ButtonTeam />
      <Button id='History'
        floating
        large
        className="yellow accent-2"
        icon="history"
        waves="light"
        style={{ right: '3%', bottom: '2%', position: 'absolute' }}
        onClick={() => setShow(!show)}
      />
      {show ?
        <ButtonHistory /> : null}
    </div>
  )
}

export default Menu;