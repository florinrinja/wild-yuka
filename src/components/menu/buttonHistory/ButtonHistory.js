import React from 'react';
// import ModalHistory from '../../modal/modalHistory/ModalHistory';
import { Button } from 'react-materialize';

const ButtonHistory = () => {

  // const [modal, setModal] = useState(false);

  return (

    <div>
      <Button id='History'
        floating
        fab={{ direction: 'right' }}
        icon="menu"
        className="yellow accent-2"
        large
        // waves="light"
        // onClick={() => setModal(!modal)}
        style={{ right: '1%' }}
      ></Button>
    </div>
  )
}

export default ButtonHistory;