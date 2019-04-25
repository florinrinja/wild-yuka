import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Quagga from 'quagga';
import PopupCam from '../home/PopupCam';
import Menu from '../menu/Menu';
import ImportData from '../../components/ImportData/ImportData';
import './Scan.css';
import SmallLogo from'../home/images/untitled.svg';

export default class Scan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
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
            maxHeight: window.innerHeight,
            maxWitdh: window.innerWidth,
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
            drawBoundingBox: false,
            showFrequency: false,
            drawScanline: false,
            showPattern: false
          },
          area: { // defines rectangle of the detection/localization area
            top: "20%",    // top offset
            right: "20%",  // right offset
            left: "20%",   // left offset
            bottom: "20%"  // bottom offset
          },
          multiple: false
        },
        locate: false,
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
  _onDetected = (data) => {
    //limit wrong code detection (no us origin) with first number
    if (data.codeResult.code[0]>=3){
      this.setState({ code: data.codeResult.code, isScan:!this.state.isScan})};
    this.state.isScan? Quagga.pause(): Quagga.start()
    }
     
  render() {
    return (
      <div>
        {this.state.popup ? <Link to="/" exact><PopupCam /></Link> : 
        <div><Menu />
          <Link to="/">
            <img class="logo" src={SmallLogo} alt="smallLogo"/>
          </Link>
          <div id="scanContainer" style={{ maxHeight: window.innerHeight, maxWitdh: window.innerWidth }}>
            <div id="pointer">
            </div>
            <div id="interactive" className="viewport">
            </div>
          </div>
        </div>}
        {this.state.isScan ?<ImportData result={this.state.code}/>: null}
      </div>
    )
  }
}