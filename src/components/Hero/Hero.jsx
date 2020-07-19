import React from "react";

import "./Hero.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Banner from "../../images/banner.png";
import Black from "../../images/black.svg";

class Hero extends React.Component {
  render() {
    var settings = {
      dots: true,
      arrows: false,
    };
    return (
      <div className="Hero">
        <Slider {...settings}>
          <div>
            <div className="container">
              <p className="text">Olá, o que você está buscando?</p>
            </div>
            <img src={Banner} />
          </div>
          <div>
            <img src={Banner} />
          </div>
          <div>
            <img src={Banner} />
          </div>
          <div>
            <img src={Banner} />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Hero;
