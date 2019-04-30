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
      country:'',  
      novaGroup:'',
      energy: '',
      carbohydrates: '',
      sugar: '',
      fat: '',
      saturatedFat: '',
      protein: '',
      sodium: '',
      salt: '',
      additives:[],
      allergens:'',
      fiber:''
    }
    this.nutriscoreLetter='';
    this.getData();
  }

getData = () => {
  fetch(`${openFood}${this.props.result}.json`)
    .then(response => response.json())
    .then(response => {
      console.log(response)
        this.setState({
        product_name: response.product.product_name,
        brand: response.product.brands,
        image: response.product.image_front_url,
        nutriscore: response.product.nutriments['nutrition-score-fr'],
        country: response.product.countries,
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
        fiber: response.product.nutriments.fiber_100g,
        allergens: response.product.allergens_from_ingredients
      });
  });
}

getNutriLogo = () => {
let nutriLogo = 'https://res.cloudinary.com/grainderiz/image/upload/v1556182917/ScanEat/Logo_Nutriscore_NA.png';
let nutriscore = parseInt(this.state.nutriscore,10);
  if (nutriscore <= -1) {
      nutriLogo = "https://upload.wikimedia.org/wikipedia/commons/7/7d/Nutri-score-A.svg";
      this.nutriscoreLetter="a";
    }
    else if (nutriscore >= 0 && nutriscore <= 2) {
      nutriLogo = "https://upload.wikimedia.org/wikipedia/commons/4/4e/Nutri-score-B.svg";
      this.nutriscoreLetter="b";
    }
    else if (nutriscore >= 3 && nutriscore <= 10) {
      nutriLogo = "https://upload.wikimedia.org/wikipedia/commons/b/b5/Nutri-score-C.svg";
      this.nutriscoreLetter="c";
    }
    else if (nutriscore >= 11 && nutriscore <= 18) {
      nutriLogo = "https://upload.wikimedia.org/wikipedia/commons/d/d6/Nutri-score-D.svg";
      this.nutriscoreLetter="d";
    }
    else if (nutriscore >= 19) {
      nutriLogo = "https://upload.wikimedia.org/wikipedia/commons/8/8a/Nutri-score-E.svg";
      this.nutriscoreLetter="e";
    }
    return nutriLogo;
  }
  
getNovaLogo = () => {
let novaLogo = 'https://res.cloudinary.com/grainderiz/image/upload/v1556182917/ScanEat/Logo_NOVAgroup_NA.png';
let novaGroup = parseInt(this.state.novaGroup,10)
  if (novaGroup === 1) {
    novaLogo = 'https://upload.wikimedia.org/wikipedia/commons/5/54/NOVA_group_1.svg';
  }
  else if (novaGroup === 2) {
    novaLogo = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/NOVA_group_2.svg';
  }
  else if (novaGroup === 3) {
    novaLogo = 'https://upload.wikimedia.org/wikipedia/commons/2/26/NOVA_group_3.svg';
  }
  else if (novaGroup === 4) {
    novaLogo = 'https://upload.wikimedia.org/wikipedia/commons/d/d3/NOVA_group_4.svg'
  } 
  return novaLogo;
}

getScanEatNote = () => {
  let note = 0;
  let novaGroup = parseInt(this.state.novaGroup,10);
  let country= this.state.country.toLowerCase();
  if (this.nutriscoreLetter ==="a"){
    note += 50;
  } else if (this.nutriscoreLetter ==="b"){
    note += 40;
  } else if (this.nutriscoreLetter ==="c"){
    note += 30;
  } else if (this.nutriscoreLetter ==="d"){
    note += 20;
  } else if (this.nutriscoreLetter ==="e"){
    note += 10;
  } 
  if (novaGroup === 1) {
    note += 40;
  } else if (novaGroup === 2){
    note += 30;
  } else if (novaGroup === 3){
    note += 20;
  } else if (novaGroup === 4){
    note += 10;
  } 
  if (country === "france"){
    note += 10
  }
  return note;
} 
  getScanEatBadge = () => {
    let note= this.getScanEatNote();
    let badge="";
    if (note <= 25){
      badge=4
    } else if (note <= 50 && note >= 25){
      badge=3
    } else if (note <= 75 && note >= 50){
      badge=2
    } else if (note <= 100 && note >= 75){
      badge=1
    } 
    return badge
  }

  render() {

  // console.log(this.state.additives.map(x => `additif numero ${x}`));

    return (
      <div>
        {this.state.product_name !== '' ? 
        < ModalProduct className=""
        result={this.props.result}
        name={this.state.product_name} 
        brand={this.state.brand}
        image={this.state.image} 
        nutriscore={this.getNutriLogo()}
        novaGroup={this.getNovaLogo()}
        scanEatBadge={this.getScanEatBadge()}
        scanEatNote={this.getScanEatNote()}
        energy={this.state.energy}
        carbohydrates={this.state.carbohydrates} 
        sugar={this.state.sugar}
        fat={this.state.fat}
        saturatedFat={this.state.sadditivesaturatedFat}
        protein={this.state.protein}
        salt={this.state.salt}
        sodium={this.state.sodium.toFixed(2)}
        additives={this.state.additives}
        allergens= {this.state.allergens}
        fiber={this.state.fiber}
        /> 
        : null}
      </div>
    )
  }
};

export default ImportData;