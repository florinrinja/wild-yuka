import React, { Component } from 'react';
import './ButtonHistory.css';
import image from '../../home/images/404.png';

const openFood = 'https://fr.openfoodfacts.org/api/v0/produit/';
let url;

class Hystory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      isPresent: null,
      image: [],
      name: [],
      product: '',
      status: [],
      verbose: []
    };
  }

  componentWillMount() {
    let nums = localStorage.getItem('myCodes');
    let arr = [];
    if (nums) {
      arr = JSON.parse(nums);
      this.setState({
        array: arr
      })
    }
    arr.map((item, index) =>
      this.getFood(item, index)
    )
  }

  // componentDidMount() {
  //   // let codeBar = this.props.result;
  //   // console.log(code)
  //   let nums = localStorage.getItem('myCodes');
  //   let arr = [];
  //   if (nums) {
  //     arr = JSON.parse(nums);

  //     // if (arr.includes(codeBar)) {
  //     //   this.setState({
  //     //     isPresent: true
  //     //   })
  //     // } else {
  //     //   this.setState({
  //     //     isPresent: false
  //     //   })
  //     // }
  //   }
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   localStorage.setItem('myCodes', JSON.stringify(nextState.array));
  // }

  getFood(item, index) {
    url = `${openFood}${item}.json`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        // console.log(response)
        let images = this.state.image;
        images[index] = response.product.image_front_url;
        let names = this.state.name;
        names[index] = response.product.product_name;
        let statuses = this.state.status;
        statuses[index] = response.status;
        let verboses = this.state.verbose;
        verboses[index] = response.status_verbose;
        this.setState({
          image: images,
          name: names,
          status: statuses,
          verbose: verboses
        });
      })
      .catch(error => {
        console.log('failed')
      })
  }

  deleteCode = (index) => {
    let previousArr = this.state.array;
    previousArr.splice(index, 1);
    localStorage.setItem('myCodes', JSON.stringify(previousArr));
    this.setState({ array: previousArr })
  }

  render() {
    let notFound = "product not found";
    return (

      <div>
        {this.state.array.map((item, index) =>
          <div key={index}>
            {this.state.status[index] === 1 ? this.state.name[index] : `${notFound}`}
            <img src={this.state.status[index] === 1 ? this.state.image[index] : `${image}`} alt={this.state.name[index]} />
            <a href="javascript:void(0)"
              onClick={() => this.deleteCode(index)}
              className={"btn-floating btn-remove"}>
              <i className="material-icons">delete</i>
            </a>
            <hr></hr>
          </div>
        )}
      </div>
    )
  }
}

export default Hystory;