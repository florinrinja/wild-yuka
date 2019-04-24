import React, { Component } from 'react';
import { Modal, Button, Table } from 'react-materialize';
import './ModalProduct.css';
import Context from "../../context/Context"

// const sampleProduct = {
//   name: "Gerblé biscuits lait chocolat",
//   energie: "462 kcal",
//   energiePortion: "56 kcal",
//   image: "https://www.gerble.fr/var/site/storage/images/_aliases/related/vitalite/biscuit-lait-chocolat/3556-30-fre-FR/Biscuit-lait-chocolat.png",
//   graisses: "22 g",
//   graissesPortion: "2,5",
//   glucides: "58 g",
//   glucidesPortion: "6,7 g",
//   fibres: "4,6 g",
//   fibresPortion: "0,6 g",
//   proteines: "11 g",
//   proteinesPortion: "1,3",
//   sel: "0,61 g",
//   selPortion: "0,08 g"
// }

class ModalProduct extends Component {
  constructor(props) {
    super(props);
    console.log(props.name)
  }

              
  render() {
    return (
      <div>
        <Modal
          actions={
            <Button waves="yellow" modal="close" flat>Fermer</Button>
          }
          header={<h4>{this.props.name}</h4>}
          open
        >
          {/* <div>
            <img src={sampleProduct.image} alt="product picture" />
          </div> */}
          <div>
          <img src={this.props.image}/>
          </div>

          <Table >
            <thead>
              <tr>
                <th>
                  Informations nutritionnelles
                </th>
                <th>
                  pour 100 g
                </th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>
                  Énergie :
                </td>
                <td>
                  {this.props.energy}
                </td>
              </tr>

              <tr>
                <td>
                  Glucides : 
                </td>
                <td>
                  {this.props.carbohydrates}
                </td>
              </tr>

              <tr>
                <td>
                  Sucres :
                </td>
                <td>
                  {this.props.sugar}
                </td>
              </tr>

              <tr>
                <td>
                  Protéines :
                </td>
                <td>
                  {this.props.protein}
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