import React, { useState } from 'react';
import ButtonHistory from '../menu/buttonHistory/ButtonHistory';
import ButtonTeam from '../menu/buttonTeam/ButtonTeam';
import { Button } from 'react-materialize';

const Menu = () => {

  const [show, setShow] = useState(false);

  const style = {
    // backgroundColor: '#fffaf2',
    // height: (window.innerHeight - (window.innerHeight * 0.7) - 74.98),
  };

  return (
    <div style={style}>
      <ButtonTeam />
      <Button id='History'
        floating
        large
        className="yellow accent-2"
        // fab={{ direction: 'right' }}
        icon="history"
        waves="light"
        style={{ right: '3%', bottom: '2%', position: 'absolute' }}
        onClick={() => setShow(!show)}
      />
      {show ?
        <ButtonHistory onClick={() => console.log('yum')} /> : null}
    </div>
  )
}

export default Menu;