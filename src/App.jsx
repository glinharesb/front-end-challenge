import React from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

export default () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
      </div>

      <div>
        <Hero />
      </div>

      <div className="container">
        <Products />
      </div>
      <div>
        <Newsletter />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
