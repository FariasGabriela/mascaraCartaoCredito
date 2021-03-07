import React, { useState } from "react";
import "./App.css";

var cartoes = {
  Visa: /^4[0-9]/,
  Mastercard: /^5[1-5][0-9]/,
  Amex: /^3[47][0-9]/,
  DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]/,
  Discover: /^6(?:011|5[0-9]{2})/,
  JCB15: /^(?:2131|1800)/,
  JCB16: /^35[0-9]/,
};

function App() {
  const [cartao, setCartao] = useState("");

  function testarCC(nr, cartoes) {
    for (var cartao in cartoes) {
      if (nr.match(cartoes[cartao])) {
        setCartao(cartao);
        return;
      }

      setCartao("");
    }
  }

  return (
    <div className="App">
      <label for="User">Digite os primeiros digitos do cartão</label>
      <input type="text" onChange={(e) => testarCC(e.target.value, cartoes)} />
      <label for="User">Resultado: {cartao}</label>
    </div>
  );
}

export default App;
