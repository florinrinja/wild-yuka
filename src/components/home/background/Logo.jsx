import React from 'react';

const Logo = () => {

  // const logoStyle ={
  //     fill: 'none',
  //     stroke:'#1e90ff',
  //     strokeWidth: '1px',
  // };
  // const logoImageStyle = {
  //   backgroundImage: `url(${Background})`,
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  // };

  // const textShadow = {
  //   textShadowColor: 'rgba(0, 0, 0, 0.75)',
  //   textShadowOffset: {
  //     width: -1,
  //     height: 1
  //   },
  //   textShadowRadius: 10
  // }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="" >
      <svg width="150" height="150" x={(window.innerWidth - 150) / 2} y={(window.innerHeight - (window.innerHeight / 3)) / 7}>
        <defs>
          <pattern id="imgpattern" width="1" height="1">
            <image width="150" height="150"
              // xlinkHref="http://lorempixel.com/400/400/"
              xlinkHref="https://gistcdn.githack.com/florinrinja/44b4522beb47f0489f9465120ac6c8f1/raw/831f0ce61160a13f3b842c4216743d1776b8b8d7/scanEat.svg"
            />
          </pattern>
        </defs>
        <path fill="url(#imgpattern)"
          d="M 0,0 L 0,0 0,150 150,150 150,0 Z" />
      </svg>
      <text
        x="50%"
        y="82%"
        textAnchor="middle"
        fill="#6FCF97"
        fontSize="1.7rem"
        fontFamily="Muli"
        dy=".2em"
        fontWeight="bold"
      // textshadow={textShadow}
      >
        “Je mange <br />
        donc je suis...”
      </text>
    </svg>
  );
};

export default Logo;  