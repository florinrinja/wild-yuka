import React, { Component } from 'react';
import { Modal, Button, Table } from 'react-materialize';
import './ModalProduct.css';

const sampleProduct = {
  name : "Gerblé biscuits lait chocolat",
  energie : "462 kcal",
  energiePortion : "56 kcal",
  image : "https://www.gerble.fr/var/site/storage/images/_aliases/related/vitalite/biscuit-lait-chocolat/3556-30-fre-FR/Biscuit-lait-chocolat.png",
  graisses : "22 g",
  graissesPortion : "2,5",
  glucides : "58 g",
  glucidesPortion : "6,7 g",
  fibres : "4,6 g",
  fibresPortion : "0,6 g",
  proteines : "11 g",
  proteinesPortion : "1,3",
  sel : "0,61 g",
  selPortion : "0,08 g"
}

class ModalProduct extends Component {

  render() {
    return (
      <div>
        <Modal 
          actions={
            <Button waves="yellow" modal="close" flat>Fermer</Button>
          }
          header={<h4>{sampleProduct.name} </h4>} 
          open
          >
          <div>
            <img src={sampleProduct.image} alt="product picture"/>  
          </div>
          <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Nutri-score-C.svg/1920px-Nutri-score-C.svg.png' alt='Nutriscore'></img>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/NOVA_group_1.svg/800px-NOVA_group_1.svg.png' alt='Novagroup'></img>
          </div>
          <Table>
            <thead>
              <tr>
                <th data-field="id">
                  Informations nutritionnelles
                </th>
                <th data-field="name">
                  par portion
                </th>
                <th data-field="price">
                  pour 100 g
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Énergie
                </td>
                <td>
                  {sampleProduct.energiePortion}
                </td>
                <td>
                  {sampleProduct.energie}
                </td>
              </tr>
              <tr>
                <td>
                  Glucides
                </td>
                <td>
                  {sampleProduct.glucidesPortion} 
                </td>
                <td>
                  {sampleProduct.glucides}
                </td>
              </tr>
              <tr>
                <td>
                  Lipides
                </td>
                <td>
                  {sampleProduct.graissesPortion}
                </td>
                <td>
                  {sampleProduct.graisses}
                </td>
              </tr>
              <tr>
                <td>
                  Protéines
                </td>
                <td>
                  {sampleProduct.proteinesPortion}
                </td>
                <td>
                  {sampleProduct.proteines}
                </td>
              </tr>
            </tbody>
            </Table>

        </Modal>
      </div>
    )
  }
};

export default ModalProduct;