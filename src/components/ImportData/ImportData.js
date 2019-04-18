import React, { Component } from 'react';

const openFood = 'https://fr.openfoodfacts.org/api/v0/produit/';
// let codeBarre= '3175680011480';

class ImportData extends Component {
  constructor (props) {
  super (props);
  this.state = {
    codeBarre : this.props.result,
    image :'',
    product_name : '',      
    // nutriscore :' ',  
    // novaGroup:'',
    glucides :'',
    sucre :'',    
    graisses : '',
    graissesSaturées:'',
    sel :'',
    sodium:'',
    protéines:'',
    // additifs:'',
    calories:'',
    // vitamines:'',
  }
  this.getData ();
  }

getData = () => {
    fetch(`${openFood}${this.state.codeBarre}.json`)
    .then(response  =>  response.json())
    .then(response  => {
          this.setState({
            image: response.product.image_front_url,
            product_name:  response.product.product_name,
            // nutrition_score: response.product.nutriments.nutrition-score-fr,
            // novaGroup : response.product.nutriments.nova-group,
            glucides : response.product.nutriments.carbohydrates,
            sucre: response.product.nutriments.sugar,
            graisses : response.product.nutriments.fat,
            // graissesSaturées : response.product.nutriments.saturated-fat,
            sel :response.product.nutriments.salt,
            sodium :response.product.nutriments.sodium,
            protéines : response.product.nutriments.proteins,
            calories: response.product.nutriments.energy,
             // additifs: response.product.additives,
            // vitamines: 
            });
    });
}

render () {
  return (
    <div>
      <img src={this.state.image} alt="produit affiché"/>
      <p>
      nom : {this.state.product_name}
      </p>
      <p>
      glucides : {this.state.glucides}
      </p>
      <p>
      sucre : {this.state.sucre}
      </p>
      <p>
      graisses : {this.state.graisses}
      </p>
      <p>
      sel : {this.state.sel}
      </p>
      <p>
      sodium : {this.state.sodium}
      </p>
      <p>
      protéines : {this.state.protéines}
      </p>
      <p>
      calories : {this.state.calories}
      </p>
      {/* <p>
      additifs : {this.state.additifs}
      </p> */}
    </div>
  )
}
}

export default ImportData;

