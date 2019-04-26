import React, { Component } from 'react';

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
          // nutrition_score: response.product.nutriments.nutrition-score-fr,
          // novaGroup : response.product.nutriments.nova-group,
          carbohydrates: response.product.nutriments.carbohydrates,
          sugar: response.product.nutriments.sugar,
          fat: response.product.nutriments.fat,
          // saturatedFat : response.product.nutriments.saturated-fat,
          salt: response.product.nutriments.salt,
          sodium: response.product.nutriments.sodium,
          protein: response.product.nutriments.proteins,
          energy: response.product.nutriments.energy,
          // additives: response.product.additives,
          // vitamins: 
        });
      });
  }

 


  render() {
    return (
      <div>
        <img src={this.state.image} alt="produit affiché" />
        
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
        </p>
        {/* <p>
      additifs : {this.state.additives}
      </p> */}
      </div>
    )
  }
}

export default ImportData;