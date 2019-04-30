import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import './ButtonHistory.css';
import image from '../../home/images/404.png';

const openFood = 'https://fr.openfoodfacts.org/api/v0/produit/';

export default class Hystory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPresent: null,
      products: []
    };
  }

  componentDidMount() {
    let _codes = localStorage.getItem('myCodes');
    let arr = [];
    if (_codes) {
      arr = JSON.parse(_codes);
      localStorage.setItem('myCodes', JSON.stringify(arr));
    } else {
      arr = [];
      localStorage.setItem('myCodes', JSON.stringify(arr));
    }
    JSON.parse(localStorage.getItem('myCodes')).map((item) => this.getFood(item));
  }

  getFood(item) {
    fetch(`${openFood}${item}.json`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          products: [...this.state.products, {
            image: response.product.image_front_url,
            name: response.product.product_name,
            status: response.status,
            verbose: response.status_verbose
          }]
        });
      })
      .catch(error => {
        console.log('failed')
      })
  }

  deleteCode = (index) => {
    let previousArr = JSON.parse(localStorage.getItem('myCodes'));
    let previousProducts = this.state.products;
    previousProducts.splice(index, 1);
    previousArr.splice(index, 1);
    this.setState({ products: previousProducts })
    localStorage.setItem('myCodes', JSON.stringify(previousArr));
  }

  render() {
    let notFound = "product not found";
    return (

      <div>
        {this.state.products.map((product, index) =>
          <div key={index}>
            <Row key={index} className="product-line">
              <Col m={6} s={6} className="image-div">
                <img className="image-css" src={product.status === 1 ? product.image : `${image}`} alt={product.name} />
              </Col>
              <Col m={6} s={6} className="textBtn-div">
                <h6><small>{product.status === 1 ? product.name : `${notFound}`}</small></h6>
                <a href="javascript:void(0);"
                  onClick={() => this.deleteCode(index)}
                  className="btn-floating btn-remove btn-small red">
                  <i className="material-icons">delete</i>
                </a>
              </Col>
            </Row>
            <hr className="horizontal-line"></hr>
          </div>
        )}
      </div>
    )
  }
}