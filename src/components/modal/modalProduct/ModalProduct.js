import React, { Component } from 'react';
import { Modal, Button, Table, Row, Col } from 'react-materialize';
import './ModalProduct.css';

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
          <Row className="container">
            <Col s={2} m={2} l={2} xl={2}>
              <img src={this.props.image} alt='' />
            </Col>
            <Col s={2} m={2} l={2} xl={2}>
              <img src={this.props.nutriscore} alt='' />
            </Col>
            <Col s={2} m={2} l={2} xl={2}>
              <img src={this.props.novaGroup} alt='' />
            </Col>
          </Row>
          <Table class="striped">
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
            </tbody>
          </Table>
          <Table class="striped">
            <tbody> 
              <tr>
              <td>
                Additifs :
              </td>
              <td>
                <p>{this.props.additives[0]? this.props.additives[0]:'N/A'}</p>
                <p>{this.props.additives[1]? this.props.additives[1]:''}</p>
                <p>{this.props.additives[2]? this.props.additives[2]:''}</p>
                <p>{this.props.additives[3]? this.props.additives[3]:''}</p>
                <p>{this.props.additives[4]? this.props.additives[4]:''}</p>
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