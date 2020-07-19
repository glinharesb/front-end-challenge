import React from "react";

import "./Footer.scss";
import Corebiz from "../../images/footer-corebiz.svg";
import Vtex from "../../images/footer-vtex.svg";
import Headset from "../../images/headset.svg";
import Envelope from "../../images/envelope.svg";

export default () => {
  return (
    <div className="Footer">
      <div className="row container">
        <div>
          <h2>Localização</h2>
          <div className="line"></div>
          <p>Rua Ifigênia Maria de Oliveira 3793</p>
          <p>Jd. Piratininga - 14403-583</p>
          <p>Franca SP, Brasil</p>
          <p>contato@clickqi.com.br</p>
          <p>+55 16 3713-6985</p>
        </div>
        <div className="buttons">
          <div>
            <button type="button">
              <img src={Envelope} alt="" /> ENTRE EM CONTATO
            </button>
          </div>
          <div>
            <button type="button">
              <img src={Headset} alt="" /> FALE COM NOSSO CONSULTOR ONLINE
            </button>
          </div>
        </div>
        <div className="copyright">
          <div className="row">
            <div>
              <p>Created By</p>
              <div>
                <img src={Corebiz} alt="" />
              </div>
            </div>
            <div>
              <p>Powered By</p>
              <div>
                <img src={Vtex} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
