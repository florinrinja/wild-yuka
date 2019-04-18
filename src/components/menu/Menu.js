import React from 'react';
import ButtonHistory from '../menu/buttonHistory/ButtonHistory';
import ButtonTeam from '../menu/buttonTeam/ButtonTeam';

const Menu = () => {
	const style = {
		backgroundColor: '#fffaf2',
		height: (window.innerHeight - (window.innerHeight * 0.7) - 74.98)
	}

	return (
		<div style={style}>
			<ButtonTeam />
			<ButtonHistory />
		</div>
	)
}

export default Menu;