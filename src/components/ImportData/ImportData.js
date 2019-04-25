import React, { Component } from 'react';
import ModalProduct from '../modal/modalProduct/ModalProduct';

const openFood = 'https://fr.openfoodfacts.org/api/v0/produit/';
// let codeBarre= '3175680011480';

class ImportData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: '',
      image: '',
      nutriscore :'',  
      novaGroup:'',
      energy: '',
      carbohydrates: '',
      sugar: '',
      fat: '',
      saturatedFat: '',
      protein: '',
      sodium: '',
      salt: '',
      additives:'',
      vitamins:'',
    }
    this.getData();
  }

getData = () => {
  fetch(`${openFood}${this.props.result}.json`)
    .then(response => response.json())
    .then(response => {
        this.setState({
        product_name: response.product.product_name,
        image: response.product.image_front_url,
        nutriscore: response.product.nutriments['nutrition-score-fr'],
        novaGroup : response.product.nutriments['nova-group'],
        energy: response.product.nutriments.energy_value,
        carbohydrates: response.product.nutriments.carbohydrates,
        sugar: response.product.nutriments.sugars,
        fat: response.product.nutriments.fat,
        saturatedFat : response.product.nutriments['saturated-fat'],
        protein: response.product.nutriments.proteins,
        sodium: response.product.nutriments.sodium,
        salt: response.product.nutriments.salt,
        additives: response.product.additives_tags,
        vitamins: response.product.vitamins_tags,
      });
  });
}

getNutriLogo = () => {
let nutriLogo = 'https://res.cloudinary.com/grainderiz/image/upload/v1556182917/ScanEat/Logo_Nutriscore_NA.png';
  if (this.state.nutriscore <= -1) {
      nutriLogo = "https://upload.wikimedia.org/wikipedia/commons/7/7d/Nutri-score-A.svg";
    }
    else if (this.state.nutriscore >= 0 && this.state.nutriscore <= 2) {
      nutriLogo = "https://upload.wikimedia.org/wikipedia/commons/4/4e/Nutri-score-B.svg";
    }
    else if (this.state.nutriscore >= 3 && this.state.nutriscore <= 10) {
      nutriLogo = "https://upload.wikimedia.org/wikipedia/commons/b/b5/Nutri-score-C.svg";
    }
    else if (this.state.nutriscore >= 11 && this.state.nutriscore <= 18) {
      nutriLogo = "https://commons.wikimedia.org/wiki/File:Nutri-score-D.svg";
    }
    else if (this.state.nutriscore >= 19) {
      nutriLogo = "https://commons.wikimedia.org/wiki/File:Nutri-score-E.svg";
    }
    return nutriLogo;
  }
  
getNovaLogo = () => {
let novaLogo = 'https://res.cloudinary.com/grainderiz/image/upload/v1556182917/ScanEat/Logo_NOVAgroup_NA.png';
  if (this.state.novaGroup === 1) {
    novaLogo = 'https://upload.wikimedia.org/wikipedia/commons/5/54/NOVA_group_1.svg' ;
  }
  else if (this.state.novaGroup === 2) {
    novaLogo = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/NOVA_group_2.svg';
  }
  else if (this.state.novaGroup === 3) {
    novaLogo = 'https://upload.wikimedia.org/wikipedia/commons/2/26/NOVA_group_3.svg';
  }
  else if (this.state.novaGroup === 4) {
    novaLogo = 'https://upload.wikimedia.org/wikipedia/commons/d/d3/NOVA_group_4.svg'
  } 
  return novaLogo;
}

  render() {
    return (
      <div>
        {this.state.product_name !== '' ? 
        < ModalProduct 
        name={this.state.product_name}
        image={this.state.image} 
        nutriscore={this.getNutriLogo()}
        novaGroup={this.getNovaLogo()}
        energy={this.state.energy}
        carbohydrates={this.state.carbohydrates} 
        sugar={this.state.sugar}
        fat={this.state.fat}
        saturatedFat={this.state.saturatedFat}
        protein={this.state.protein}
        fat={this.state.fat}
        saturatedFat={this.state.saturatedFat}
        salt={this.state.salt}
        sodium={this.state.sodium.toFixed(2)}
        additives={this.state.additives}
        /> 
        : null}
      </div>
    )
  }
};

export default ImportData;