import React, { useState } from 'react';
import { Button } from 'react-materialize';
import Background from './images/scan.png';
import { Link } from 'react-router-dom';

const ScanBut = () => {

  const [scanner, getScan] = useState(false);

  const styleParent = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffff',
  };

  const styleChild = {
    width: 160,
    height: 75,
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'justify',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div style={styleParent}>
      <Link to="/Scan">
      <Button className="yellow accent-2 pulse" 
        style={styleChild}
        onClick={() => getScan(!scanner)}>
      </Button>
      </Link>
    </div>
  )
}

export default ScanBut;