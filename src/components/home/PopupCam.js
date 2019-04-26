import React, { Component } from 'react';
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import { Modal, Button } from 'react-materialize';

export default class PopupCam extends Component {

  render() {
    return (
      <div>
        <Modal
          actions={
            <Button waves="green" modal="close" flat>Fermer</Button>}
          header="Hein!?" className="black-text" open>
          <p>
            Comment tu veux scanner un produit si Scan Eat ne peut pas accéder à ta caméra?</p>
          <p> Pour que le scan fonctionne, autorise l'accés à ta caméra à gauche de ta barre d'adresse (Tout en haut). </p>
        </Modal>
      </div>
    )
  }
}  