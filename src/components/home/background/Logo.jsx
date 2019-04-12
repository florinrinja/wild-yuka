import React from 'react';
import Background from './untitled.svg';

const Logo = () => {

  // const logoStyle ={
  //     fill: 'none',
  //     stroke:'#1e90ff',
  //     strokeWidth: '1px',
  // };
  const logoImageStyle = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const textShadow = {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {
      width: -1,
      height: 1
    },
    textShadowRadius: 10
  }

  return (
    <g className="">
      <g>
        <foreignObject
          className=""
          x={(window.innerWidth - 150) / 2}
          y={(window.innerHeight - 500) / 2}
          width="150"
          fill="#ff2400"
          height="150"
          style={logoImageStyle}
        >
        </foreignObject>
      </g>
      <text
        x="50%"
        y="50%"
        text-anchor="middle"
        fill="#6FCF97"
        font-size="1.5rem"
        font-family="Arial"
        dy=".3em"
        fontWeight="bold"
        text-shadow={textShadow}
      >
        “Je mange <br />
        donc je suis...”
      </text>
    </g>
  );
};

export default Logo;