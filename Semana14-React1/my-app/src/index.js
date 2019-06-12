import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
let contadorNum =2
const nome = {
    primeiroNome: "Ana Alice",
    sobreNome: "Costa"
}
function verificaNum(contador){
    if(contador === 0)
        return "Contador não iniciado"
    else
        return "Contador iniciado"


}

function completaNome(nome){
    if(nome){
        return nome.primeiroNome + ' ' + nome.sobreNome;
    } else{
        return 'desconhecido';
    }

}

let template = <div className="contador">
                    <h1>Count: {contadorNum}</h1>
                    <h2>Oi, {completaNome(nome)}</h2>
                    <div>
                        <button id="soma">+1</button>
                        <button id="subtrai">-1</button>
                        <button id="limpa">Reset</button>
                        <h3 id='status_contador'>{verificaNum(contadorNum)}</h3>
                    </div>
                </div>

ReactDOM.render(template, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

