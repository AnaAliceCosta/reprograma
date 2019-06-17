import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      exibido:false
    }
  }
  alteraExibicao = ()=> this.setState( anterior=>({exibido: !anterior.exibido}) )

  render(){
    return (
      <div className="App">
        <h1>Esconde-Aparece</h1>
          <button onClick={this.alteraExibicao}>{this.state.exibido ? "Esconder Detalhes" : "Mostrar Detalhes"}</button>
          {this.state.exibido && <p>Maravilhosas. jogue como uma garota</p> }
      </div>
    )

  }
}

export default App;
