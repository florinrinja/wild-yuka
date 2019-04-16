import React, { useState } from 'react';
import { Button } from 'react-materialize';
import Background from './images/scan.svg';
import { Link } from 'react-router-dom';

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
      <Link to="/Scan" exact>
      <Button className="yellow accent-2"
        style={styleChild}
        onClick={() => getScan(!scanner)}>
      </Button>
      </Link>
    </div>
  )
}

export default ScanBut;