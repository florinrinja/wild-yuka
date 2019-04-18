import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize';
import './ModalProduct.css';

const sampleProduct = {
  name : "Gerblé biscuits lait chocolat",
  energy : "462 kcal",
  image : "https://www.gerble.fr/var/site/storage/images/_aliases/related/vitalite/biscuit-lait-chocolat/3556-30-fre-FR/Biscuit-lait-chocolat.png",
  graisses : "19 g",
  glucides : "62 g",
  fibres : "4,6 g",
  sel : "0,75 g",
}

class ModalProduct extends Component {

  render() {
    return (
      <div>
        <Modal 
          actions={
            <Button waves="yellow" modal="close" flat>Fermer</Button>
          } 
          header="Fiche produit" 
          trigger={<Button 
            id='Team'
            floating
            fab={{ direction: 'right'}}
            icon="pageview"
            className="green lighten-1"
            style={{ left: '11%' }}
            large
          />}
          >
          <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Nutri-score-C.svg/1920px-Nutri-score-C.svg.png' alt='Nutriscore'></img>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/NOVA_group_1.svg/800px-NOVA_group_1.svg.png' alt='Novagroup'></img>
            <ul>
              <li><h5>{sampleProduct.name} </h5> </li>
              <li> <img src={sampleProduct.image} alt="product picture"/></li>
              <li><h6>Pour 100 g</h6></li>
              <li> Glucides : {sampleProduct.glucides} </li>
              <li> Valeur énergétique : {sampleProduct.energy} </li>
              <li> Matières grasses : {sampleProduct.graisses} </li>
              <li> Fibres alimentaires : {sampleProduct.fibres} </li>
              <li> Sel : {sampleProduct.sel} </li>
            </ul>
          </div>
        </Modal>
      </div>
    )
  }
};

export default ModalProduct;