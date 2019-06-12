import React from 'react';
import logo from './logo.svg';
import './App.css';
import PrevisaoCard from './PrevisaoCard'

function App() {
  const previsao31_05 = {
    data: '31/05/2019',
    resumo: 'Ensolarado',
    imagem: 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png',
    temperatura: {
      max: 31,
      min: 20
    }
   }

   const previsao01_06 = {
    data: '01/06/2019',
    resumo: 'Nublado',
    imagem: 'https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_960_720.png',
    temperatura: {
      max: 25,
      min: 18
    }
   }

  return (
    <div className="App">
      <PrevisaoCard
        data= {previsao31_05.data}
        resumo={previsao31_05.resumo}
        imagem= {previsao31_05.imagem}
        temperatura = {previsao31_05.temperatura}
      />
      <PrevisaoCard
        data= {previsao01_06.data}
        resumo={previsao01_06.resumo}
        imagem= {previsao01_06.imagem}
        temperatura = {previsao01_06.temperatura}
      />

    </div>
  );
}

export default App;
