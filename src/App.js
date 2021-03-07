import React from 'react';
import logo from './logo.svg';
import './App.css';

var cartoes = {
  Visa: /^4[0-9]/,
  Mastercard: /^5[1-5][0-9]/,
  Amex: /^3[47][0-9]/,
  DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]/,
  Discover: /^6(?:011|5[0-9]{2})/,
  JCB15: /^(?:2131|1800)/,
  JCB16: /^35[0-9]/
};

function testarCC(nr, cartoes) {
  for (var cartao in cartoes) if (nr.match(cartoes[cartao])) return cartao;
  return false;
}

var valido = '1800';

[valido].forEach(function(teste){
 console.log(testarCC(teste, cartoes)); 
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
