import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Quagga from 'quagga';
import PopupCam from '../home/PopupCam';
import Menu from '../menu/Menu';

export default class Scan extends Component {
	constructor(props) {
		super(props);
		this._onDetected = this._onDetected.bind(this);
		this.state = {
			popup: false
		}
	}

	componentDidMount() {
		const openPopup = () => {
			this.setState({ popup: !this.state.popup })
		};
		Quagga.init(
			{
				inputStream: {
					type: 'LiveStream',
					constraints: {
						width: window.innerWidth,
						height: window.innerHeight,
						facingMode: 'environment', // or user
					},
				},
				locator: {
					patchSize: 'medium',
					halfSample: true,
				},
				numOfWorkers: 0,
				decoder: {
					readers: ['ean_reader', 'ean_8_reader'],
					debug: {
						drawBoundingBox: true,
						showFrequency: false,
						drawScanline: false,
						showPattern: false
					},
					multiple: false
				},
				locate: true,
			},
			function (err) {
				if (err) {
					openPopup();
				}
				if (!err) {
					Quagga.start();
				}
			}
		);
		Quagga.onDetected(this._onDetected);
	}

	componentWillUnmount() {
		Quagga.offDetected(this._onDetected);
	}

	_onDetected(result) {
		this.props.onDetected(result);
		Quagga.pause();
	}

	render() {
		return (
			<div style={{ maxHeight: window.innerHeight }}>
				{this.state.popup ? <Link to="/" exact><PopupCam /></Link> : <div><div id="interactive" className="viewport"></div><Menu /></div>}
			</div>
		)
	}
}
