import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Quagga from 'quagga';
import PopupCam from '../home/PopupCam';
import Menu from '../menu/Menu';
import './Scan.css'

export default class Scan extends Component {
	constructor(props) {
		super(props);
		this._onDetected = this._onDetected.bind(this);
		this.update=this.update.bind(this);
		this.state = {
			popup: false,
			height: 0,
			width: 0
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
						width: 640,
						height: 480,
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
						drawBoundingBox: false,
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
		this.update();
		Quagga.onDetected(this._onDetected);

		Quagga.onProcessed(result => {
			const drawingCanvas = Quagga.canvas.dom.overlay;
			drawingCanvas.style.display = 'none';
		});
	}

	update (){
		this.setState({
			height: window.innerHeight,
			width: window.innerWidth
		});
		
	};
	
	componentWillUnmount() {
		Quagga.offDetected(this._onDetected);

		
	}

	_onDetected(result) {
		this.props.onDetected(result);
		Quagga.pause();
	}

	render() {
		return (
			<div >
				{
					this.state.popup ? <Link to="/" exact><PopupCam /></Link> :
						<div>
							<div id="interactive" className="viewport">
							</div>
							<Menu />
						</div>
				}
			</div>
		)
	}
}
