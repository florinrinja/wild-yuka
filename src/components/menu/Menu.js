import React, { Component } from 'react';
import ButtonHistory from '../menu/buttonHistory/ButtonHistory';
import ButtonTeam from '../menu/buttonTeam/ButtonTeam';

const Menu = () => {
	const style = {
		backgroundColor: '#3FAF2'
	}
	return (
		<div style={style}>
			<ButtonHistory />
			<ButtonTeam />
		</div>
	)
}

export default Menu;