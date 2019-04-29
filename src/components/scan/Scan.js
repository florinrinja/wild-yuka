import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Quagga from 'quagga';
import PopupCam from '../home/PopupCam';
import Menu from '../menu/Menu';
import ImportData from '../../components/ImportData/ImportData';
import './Scan.css';
import SmallLogo from '../home/images/untitled.svg';
// import ModalProduct from '../modal/modalProduct/ModalProduct';
// import Context from '../context/Context';
import Hystory from '../menu/buttonHistory/Hystory';

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
            facingMode: 'environment'// or user
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
  _onDetected = (data) => {
      //callback with fetch to see if result is a valid code
      fetch(`https://fr.openfoodfacts.org/api/v0/produit/${data.codeResult.code}.json`)
        .then(response => response.json())
        .then(response => {
          if (response.status === 1 && !this.state.isScan) {
            this.setState({ isScan: true, code: data.codeResult.code });
            Quagga.pause();
          } else if (this.state.isScan && response.status === 1) {
            this.setState({ code: data.codeResult.code, isScan: false }, () => {
              this.setState({ isScan: true });
              Quagga.pause();
            })
          }
          setTimeout(() => {
            Quagga.start();
          }, 5000)
        });
    }

  render() {
    return (
      <div style={{ Height: window.innerHeight, witdh: window.innerWidth }}>
        {this.state.popup ? <Link to="/" exact><PopupCam /></Link> :
          <div><Menu />
            <Link to="/">
              <img className="logo" src={SmallLogo} alt="smallLogo" />
            </Link>
            <div id="scanContainer" style={{ maxHeight: window.innerHeight, maxWitdh: window.innerWidth }}>
              <div id="pointer">
              </div>
              <div id="interactive" className="viewport">
              </div>
            </div>
          </div>}
        {this.state.isScan ? <ImportData result={this.state.code} /> : null}
        <div className="history">
          {this.state.isScan ? <Hystory result={this.state.code} /> : null}
          {/* {this.state.isScan ?  <ModalProduct result={this.state.code}/>:null} */}
        </div>
      </div>
    )
  }
}