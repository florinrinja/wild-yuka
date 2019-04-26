import React, { Component } from 'react';
import { Modal, Button, Table } from 'react-materialize';
import './ModalProduct.css';


const sampleProduct = {
  name: "Gerblé biscuits lait chocolat",
  energie: "462 kcal",
  energiePortion: "56 kcal",
  image: "https://www.gerble.fr/var/site/storage/images/_aliases/related/vitalite/biscuit-lait-chocolat/3556-30-fre-FR/Biscuit-lait-chocolat.png",
  graisses: "22 g",
  graissesPortion: "2,5",
  glucides: "58 g",
  glucidesPortion: "6,7 g",
  fibres: "4,6 g",
  fibresPortion: "0,6 g",
  proteines: "11 g",
  proteinesPortion: "1,3",
  sel: "0,61 g",
  selPortion: "0,08 g"
}

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
    // console.log(code)
    let nums = localStorage.getItem('myCodes');
    let arr = [];
    if (nums) {
      arr = JSON.parse(nums);
      if (arr.includes(code)) {
        this.setState({
          isPresent:true
        })
      }else{
        this.setState({
          isPresent:false
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
      isPresent:true
     })
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
    isPresent:false
    })
  }



  render() {
    return (
      <div>
        <Modal
          actions={
            <Button waves="yellow" modal="close" flat>Fermer</Button>
          }
          header={
            <div>
              <h4><small>{sampleProduct.name} </small></h4>
              {/* {
                this.state.isPresent?
                <div>
                <a href="javascript:void(0);"
                   className="btn-flat btn-save disabled">
                  <i className="material-icons">save</i>
                </a>
                <a href="javascript:void(0);"
                   className="btn-floating btn-remove"
                   onClick={this.deleteCode}>
                  <i className="material-icons">delete</i>
                </a>
                </div>
                :
                <div>
                <a href="javascript:void(0);"
                   onClick={this.saveCode}
                   className="btn-floating btn-save">
                  <i className="material-icons">save</i>
                </a>
                <a href="javascript:void(0);"
                   className="btn-flat btn-remove disabled">
                  <i className="material-icons">delete</i>
                </a>
                </div>
              } */}
              <a href="javascript:void(0);" 
                 onClick={this.state.isPresent?null:this.saveCode} 
                 className={this.state.isPresent? "btn-flat btn-save disabled" :"btn-floating btn-save"} >
                <i className="material-icons">save</i>
              </a>
              <a href="javascript:void(0)" 
                 onClick={this.state.isPresent?this.deleteCode:null} 
                 className={this.state.isPresent?"btn-floating btn-remove":"btn-flat btn-remove disabled"}>
                <i className="material-icons">delete</i>
              </a>
            </div>
          }
          open
        >
          <div>
            <img src={sampleProduct.image} alt={sampleProduct.name} />
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