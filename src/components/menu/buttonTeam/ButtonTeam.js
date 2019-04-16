import React from 'react';
// import ModalTeam from '../../modal/modalTeam/ModalTeam';
import { Button } from 'react-materialize';


const ButtonTeam = () => {

	// const [modal, setModal] = useState(false);

	return (

		<div>
			<Button id='Team'
				floating
				fab={{ direction: 'left'}}
				icon="help"
				className="yellow accent-2"
				large
				// waves="light"
				// onClick={() => setModal(!modal)}
				style={{ left: '1%' }}
			></Button>
		</div>
	)
}

export default ButtonTeam;