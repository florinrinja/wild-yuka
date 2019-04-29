import React, { Component } from 'react';
import { Modal, Button, Table, Collapsible, CollapsibleItem } from 'react-materialize';
import './ModalProduct.css';

class ModalProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codes: [],
      isPresent: null
    }
  }

  componentDidMount() {
    let code = this.props.result;
    let nums = localStorage.getItem('myCodes');
    let arr = [];
    if (nums) {
      arr = JSON.parse(nums);
      if (arr.includes(code)) {
        this.setState({
          isPresent: true
        })
      } else {
        this.setState({
          isPresent: false
        })
      }
    }

  }

  saveCode = (ev) => {
    let code = this.props.result;
    let _codes = localStorage.getItem('myCodes');
    let arr = [];
    if (_codes) {
      arr = JSON.parse(_codes);
      arr.push(code);
      arr = Array.from(new Set(arr));
      localStorage.setItem('myCodes', JSON.stringify(arr));
    } else {
      arr = [];
      arr.push(code);
      localStorage.setItem('myCodes', JSON.stringify(arr));
    }
    this.setState({
      codes: _codes,
      isPresent: true
    })
    this.forceUpdate();

  }

  deleteCode = (ev) => {
    let code = this.props.result;
    let _codes = localStorage.getItem('myCodes');
    let arr = [];

    if (_codes) {
      arr = JSON.parse(_codes);
      for (let i = 0; i < arr.length; i++) { //loop over the collection
        if (arr[i] === code) { //see if code match
          arr.splice(i, 1); //remove item from array
          break; //exit loop
        }
      }
      localStorage.setItem('myCodes', JSON.stringify(arr));
    }
    this.setState({
      codes: _codes,
      isPresent: false
    })
    this.forceUpdate();
  }

  // refreshPage() {
  //   window.location.reload();
  // }

  render() {
    return (
      <div>
        <Modal
          className=""
          actions={
            <Button waves="yellow" modal="close" flat /*onClick={() => this.refreshPage()}*/>Fermer</Button>
          }
          header={
            <div>
              <h4><small>{this.props.name}</small></h4>
              <a href="javascript:void(0);"
                onClick={this.state.isPresent ? null : this.saveCode}
                className={this.state.isPresent ? "btn-flat btn-save disabled" : "btn-floating btn-save"} >
                <i className="material-icons">save</i>
              </a>
              <a href="javascript:void(0)"
                onClick={this.state.isPresent ? this.deleteCode : null}
                className={this.state.isPresent ? "btn-floating btn-remove red" : "btn-flat btn-remove disabled"}>
                <i className="material-icons">delete</i>
              </a>
            </div>
          }
          open={true}
        >

          <div>
            <img src={this.props.image} className='mon_image' alt='ProductImage' />
          </div>
          <div className='nutri_nova'>
            <img src={this.props.nutriscore} alt='Nutriscore' />
            <img src={this.props.novaGroup} alt='NovaGroup' style={{ maxHeight: 70 }} />
          </div>
          <Collapsible>
            <CollapsibleItem header="En bref..." icon="restaurant" expanded>
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
                      Lipides :
                    </td>
                    <td>
                      {this.props.fat}
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
            </CollapsibleItem>
            <CollapsibleItem header="Et si on creusait un peu ?" icon="whatshot" >
              <Table class="striped">
                <tbody>
                  <tr>
                    <td>
                      Fibres :
                    </td>
                    <td>
                      {this.props.fiber ? this.props.fiber : 'N/A'}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Graisses saturées :
                    </td>
                    <td>
                      {this.props.saturatedFat ? this.props.saturatedFat : 'N/A'}
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
            </CollapsibleItem>
            <CollapsibleItem header="Et là c'est le drame..." icon="report_problem">
              <Table className="striped">
                <tbody>
                  <tr>
                    <td>
                      Additifs :{this.props.additifs}
                    </td>
                    <td>
                      <p>{this.props.additives[0] ? this.props.additives[0] : 'N/A'}</p>
                      <p>{this.props.additives[1] ? this.props.additives[1] : ''}</p>
                      <p>{this.props.additives[2] ? this.props.additives[2] : ''}</p>
                      <p>{this.props.additives[3] ? this.props.additives[3] : ''}</p>
                      <p>{this.props.additives[4] ? this.props.additives[4] : ''}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Allergènes :
                    </td>
                    <td>
                      <p>{this.props.allergens ? this.props.allergens : 'N/A'}</p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CollapsibleItem>
          </Collapsible>

          {/* <Table class="striped">
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
          <Table className="striped">
            <tbody> 
              <tr>
              <td>
                Additifs :{this.props.additifs}
              </td>
              <td>
                {/* <p>{this.props.additives[0]? this.props.additives[0]:'N/A'}</p>
                <p>{this.props.additives[1]? this.props.additives[1]:''}</p>
                <p>{this.props.additives[2]? this.props.additives[2]:''}</p>
                <p>{this.props.additives[3]? this.props.additives[3]:''}</p>
                <p>{this.props.additives[4]? this.props.additives[4]:''}</p>
              </td>
              </tr>
            </tbody>
          </Table> */}
        </Modal>
      </div>
    )
  }
};

export default ModalProduct;