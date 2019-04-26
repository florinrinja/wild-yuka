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

	update = () => {
		this.setState({
			height: window.innerHeight,
			width: window.innerWidth
		});
		// console.log(this.state.width)
	};

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