import React, { useState } from 'react';
// import M from '../../../node_modules/materialize-css/dist/js/materialize.js';
import { Button } from 'react-materialize';
import Background from './images/scan.svg';

const ScanBut = () => {

  const [scanner, getScan] = useState(false);

  const styleParent = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffaf2'
  };

  const styleChild = {
    width: 140,
    height: 70,
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'justify',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div style={styleParent}>
      <Button className="yellow accent-2"
        style={styleChild}
        onClick={() => getScan(!scanner)}>
      </Button>
    </div>
  )
}

export default ScanBut;