import React from "react";

import "./Newsletter.scss";

export default () => {
  return (
    <div className="Newsletter">
      <div className="container">
        <h3>Participe de nossas news com promoções e novidades!</h3>
        <div className="row">
          <div>
            <input type="text" placeholder="Digite seu nome" />
          </div>
          <div>
            <input type="text" placeholder="Digite seu email" />
          </div>
          <div>
            <button type="button">Eu quero!</button>
          </div>
        </div>
      </div>
    </div>
  );
};
