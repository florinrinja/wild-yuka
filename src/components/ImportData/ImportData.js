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
      // additives:'',
      energy: '',
      // vitamins:'',
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
          salt: response.product.nutriments.salt,
          sodium: response.product.nutriments.sodium,
     
         
          // nutrition_score: response.product.nutriments.nutrition-score-fr,
          // novaGroup : response.product.nutriments.nova-group,
          // saturatedFat : response.product.nutriments.saturated-fat,
          // additives: response.product.additives,
          // vitamins: 
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
        
        /> 
        : null}

        {/* <img src={this.state.image} alt="produit affiché" />
        <p>
          code : {this.props.result}
          nom : {this.state.product_name}
        </p>
        <p>
          glucides : {this.state.carbohydrates}
        </p>
        <p>
          sucre : {this.state.sugar}
        </p>
        <p>
          graisses : {this.state.fat}
        </p>
        <p>
          sel : {this.state.salt}
        </p>
        <p>
          sodium : {this.state.sodium}
        </p>
        <p>
          protéines : {this.state.protein}
        </p>
        <p>
          calories : {this.state.energy}
<<<<<<< HEAD
        </p> */}
=======
        </p>
>>>>>>> 2b2706a45214cc76e1f831b4a3b6d66c37ccfd18
        {/* <p>
      additifs : {this.state.additives}
      </p> */}
      </div>
    )
  }
<<<<<<< HEAD
};
=======
}
>>>>>>> 2b2706a45214cc76e1f831b4a3b6d66c37ccfd18

export default ImportData;