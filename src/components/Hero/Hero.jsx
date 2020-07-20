import React from "react";

import "./Hero.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Banner from "../../images/banner.png";

class Hero extends React.Component {
  render() {
    var settings = {
      dots: true,
      arrows: false,
    };
    return (
      <div className="Hero">
        <Slider {...settings}>
          <div className="height">
            <div className="container">
              <div className="text">
                <p>Olá, o que você está buscando?</p>
                <h1>Criar ou migrar seu e-commerce?</h1>
              </div>
            </div>
            <img src={Banner} className="banner" alt="" />
          </div>
          <div>
            <img src={Banner} className="banner" alt="" />
          </div>
          <div>
            <img src={Banner} className="banner" alt="" />
          </div>
          <div>
            <img src={Banner} className="banner" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Hero;
