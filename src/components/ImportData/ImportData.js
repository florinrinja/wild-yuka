import React, { Component } from 'react';
import ModalProduct from '../modal/modalProduct/ModalProduct';

const openFood = 'https://fr.openfoodfacts.org/api/v0/produit/';
// let codeBarre= '3175680011480';

class ImportData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // codeBarre : this.props.result,
      image: '',
      product_name: '',
      // nutriscore :' ',  
      // novaGroup:'',
      carbohydrates: '',
      sugar: '',
      fat: '',
      saturatedFat: '',
      salt: '',
      sodium: '',
      protein: '',
      additives:'',
      energy: '',
      vitamins:'',
    }
    this.getData();
  }

  getData = () => {
    fetch(`${openFood}${this.props.result}.json`)
      .then(response => response.json())
      .then(response => {

        this.setState({
          image: response.product.image_front_url,
          product_name: response.product.product_name,
          carbohydrates: response.product.nutriments.carbohydrates,
          energy: response.product.nutriments.energy_value,
          sugar: response.product.nutriments.sugars,
          protein: response.product.nutriments.proteins,
          fat: response.product.nutriments.fat,
          salt: response.product.nutriments.salt_100g,
          sodium: response.product.nutriments.sodium_100g,
          saturatedFat : response.product.nutriments['saturated-fat_value'],
          additives: response.product.additives_tags,
          vitamins: response.product.vitamins_tags,
        });

      });
  }

  render() {
    return (
        <div>
        {this.state.product_name !== '' ? 
        < ModalProduct 
        name={this.state.product_name}
        image={this.state.image} 
        carbohydrates={this.state.carbohydrates} 
        energy={this.state.energy}
        sugar={this.state.sugar}
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