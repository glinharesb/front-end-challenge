import React from "react";

import "./Newsletter.scss";

class Newsletter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch("https://corebiz-test.herokuapp.com/api/v1/newsletter", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.message === "Created successfully") {
          document.getElementById("news").style.display = "none";
          document.getElementById("success").style.display = "block";
          this.resetForm();
        } else {
          //
        }
      });
  }

  resetForm() {
    this.setState({ email: "", name: "" });
  }

  render() {
    return (
      <div className="Newsletter">
        <div className="container">
          <div id="news">
            <h3>Participe de nossas news com promoções e novidades!</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="row">
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Digite seu nome"
                    value={this.state.name}
                    onChange={this.onNameChange.bind(this)}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Digite seu email"
                    value={this.state.email}
                    onChange={this.onEmailChange.bind(this)}
                  />
                </div>
                <div>
                  <button type="submit" type="Submit">
                    Eu quero!
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div id="success">
            <p>Seu e-mail foi cadastrado com sucesso!</p>
            <p>
              A partir de agora você receberá as novidade e ofertas exclusivas.
            </p>
            <button>Cadastrar novo e-mail</button>
          </div>
        </div>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
}

export default Newsletter;
