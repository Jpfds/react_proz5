import React, { useState } from 'react';
import './App.css';

const Buttom = () => {
  const [valor, setValor] = useState(0);

  const moreValor = () => {
    setValor(valor + 1);
  };

  return (
    <div class="divbt">
      <p>Valor é: {valor}</p>
      <button onClick={moreValor}>Aumentar o Valor</button>
    </div>
  );
};

export default Buttom;


