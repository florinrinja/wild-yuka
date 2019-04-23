import React, { Component } from 'react';
import Logo from './Logo';

class Canvas extends Component {
  constructor() {
    super();
    this.state = {
      height: 0,
      width: 0
    };
    window.addEventListener("resize", this.update);
  }

  componentDidMount() {
    this.update();
  }

<<<<<<< HEAD
	update = () => {
		this.setState({
			height: window.innerHeight,
			width: window.innerWidth
		});
		// console.log(this.state.width)
	};
=======
  update = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };
>>>>>>> 65ac237a7b78c2fa983f813b1cade79a46b7b6c4

  render() {
    const viewBox = [0, 0, window.innerWidth, (window.innerHeight - (window.innerHeight * 0.3))];
    return (
      <svg
        width={this.width}
        height={this.height}
        preserveAspectRatio="xMidYMin meet"
        id="background"
        viewBox={viewBox}
      >
        <Logo />
      </svg>
    );
  };
}

export default Canvas; 