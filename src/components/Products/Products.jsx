import React from "react";

import "./Products.scss";
import ProductList from "./ProductList";

export default () => {
  return (
    <div className="Products">
      <div>
        <h2>Mais Vendidos</h2>
        <div className="line"></div>
      </div>
      <div className="slider">
        <ProductList />
      </div>
    </div>
  );
};
