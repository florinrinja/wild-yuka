import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Quagga from 'quagga';
import PopupCam from '../home/PopupCam';
import Menu from '../menu/Menu';
import ImportData from '../../components/ImportData/ImportData';
import './Scan.css';
import ModalProduct from '../modal/modalProduct/ModalProduct'

export default class Scan extends Component {
	constructor(props) {
		super(props);
		this.state = {
			code: '',
			productName: '',
			productImage: '',
			popup: false,
			isScan: false
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
					patchSize: 'small',
					halfSample: false,
				},
				numOfWorkers: 0,
				decoder: {
					readers: ['ean_reader'],
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
		// this.getProduct()
	}
	// getProduct = () => {
	// 	fetch(`https://fr.openfoodfacts.org/api/v0/produit/${this.state.code}.json`)
	// 		.then(response  =>  response.json())
	//     .then(response  => {
	// 			console.log(response)
	// 			this.setState({
	// 				productImage:  response.product.image_front_url,
	//         productName:		response.product.product_name,
	//         additives:response.product.additives_original_tags 
	//       });
	// 		});

	// }

	componentWillUnmount() {
		Quagga.offDetected(this._onDetected);
	}

	_onDetected = (data) => {
		this.setState({ code: data.codeResult.code });
		console.log(this.state.code)
		// console.log(this.state.code)
		this.setState({ isScan: true })
		Quagga.pause();
	}

	render() {
		return (
			<div style={{ Height: window.innerHeight, witdh: window.innerWidth }}>
				{/* {this.state.isScan ? <div><h1>{this.state.productName}</h1><img src={this.state.productImage}></img></div>:null} */}
				{this.state.popup ? <Link to="/" exact><PopupCam /></Link> : <div><Menu /><div id="interactive" className="viewport"></div></div>}
				{this.state.isScan ?/*<ImportData result={this.state.code}/>*/ <ModalProduct /> : null}
			</div>
		)
	}
}