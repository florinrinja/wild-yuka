import React, { Component } from 'react';
import { Modal, Button, Table, Row, Col } from 'react-materialize';
import './ModalProduct.css';
import Context from "../../context/Context"

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
          header={<h3> {this.props.name}</h3>}
          open
        >
        
        <Row>
          <Col s={2} m={2} l={3} xl={4}>
            <img src={this.props.image} alt=''/>
          </Col>

          <Col s={2} m={2} l={3} xl={4}>
            <img src={this.props.nutriscore} alt=''/>
          </Col>

          <Col s={2} m={2} l={3} xl={4}>
            <img src={this.props.novaGroup} alt=''/>
          </Col>
          </Row>

          <Table class="striped responsive-table">
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
                    Lipides :
                  </td>
                  <td>
                    {this.props.fat}
                  </td>
                </tr>
              <tr>
                <td>
                  Graisses saturées :
                </td>
                <td>
                  {this.props.saturatedFat}
                </td>
              </tr>
              <tr>
                <td>
                  Lipides :
                </td>
                <td>
                  {this.props.fat}
                </td>
              </tr>

              <tr>
                <td>
                  Graisses saturées :
                </td>
                <td>
                  {this.props.saturatedFat}
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
              <tr>
                <td>
                  Sodium :
                </td>
                <td>
                  {this.props.sodium}
                </td>
              </tr>
              <tr>
                <td>
                  Sel :
                </td>
                <td>
                  {this.props.salt}
                </td>
              </tr>
              <tr>
                <td>
                  Additifs :
                </td>
                <td>
                  {this.props.additives}
                </td>
              </tr>
              <tr>
                <td>
                  Vitamines :
                </td>
                <td>
                  {this.props.vitamins}
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