import React, { Component } from "react";

import Star from "../../images/star.svg";

import "./Products.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class CreateProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://corebiz-test.herokuapp.com/api/v1/products")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Nota: É importante lidar com os erros aqui
        // em vez de um bloco catch() para não recebermos
        // exceções de erros dos componentes.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    var settings = {
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
      ],
    };

    var formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    var clicks = Number(window.localStorage.getItem("cart"));
    function cartClick(c) {
      c.preventDefault();
      clicks += 1;
      document.getElementById("clicks").innerHTML = clicks;
      window.localStorage.setItem("cart", clicks);
    }

    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Erro: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Carregando...</div>;
    } else {
      return (
        <Slider {...settings}>
          {items.map((item) => (
            <div>
              <div className="product">
                <img src={item.imageUrl} alt="" />
              </div>
              <div className="description">
                <h4>{item.productName}</h4>
                <div className="star">
                  <img src="" alt="" />
                </div>
                <h5></h5>
                <h3>por R$ {formatter.format(item.price / 100)}</h3>
                <p>ou em x de R$</p>
                <button className="buttonbuy" onClick={cartClick}>
                  COMPRAR
                </button>
              </div>
            </div>
          ))}
        </Slider>
      );
    }
  }
}

export default CreateProduct;
