import React, { Component } from 'react';
import { Button, Modal } from 'react-materialize';
import ButtonHistory from '../../menu/buttonHistory/ButtonHistory'

const ModalHistory = React.memo(function ModalHistory({ modHist, modifHist }) {
  function handleClick() {
    modifHist();
  }

  return (
    <div>

    </div>
  );
});

export default ModalHistory; 