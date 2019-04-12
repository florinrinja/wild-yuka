import React, { useState } from 'react';
import Test from './Test';
import M from '../../../node_modules/materialize-css/dist/js/materialize.js';
import { Button } from 'react-materialize';

const ScanBut = () => {

  const [scanner, getScan] = useState(false);

  const styleParent = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const styleChild = {
    width: 140,
    height: 70,
    backgroundImage: "url(" + "https://svgsilh.com/svg_v2/306926.svg" + ")",
    backgroundPosition: 'justify',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div style={styleParent}>
      {scanner ? <Test /> :
        <Button className="yellow"
          style={styleChild}
          onClick={() => getScan(!scanner)}>
        </Button>}
    </div>
  )
}

export default ScanBut;