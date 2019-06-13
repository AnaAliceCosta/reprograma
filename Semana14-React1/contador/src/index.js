import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';



class Contador extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            count:0,
            frase:"Contador não iniciado"
        }

    }
    addUm=()=>{
        this.setState((estadoAnterior)=>{
            return {
                count: estadoAnterior.count +1
            }
        })
    }
    subUm=()=>{
        this.setState((estadoAnterior)=>{
            return {
                count: estadoAnterior.count === 0 ? 0 : (estadoAnterior.count -1)
            }
        })
    }
    reset=()=>{
        this.setState(()=>{
            return {
                count: 0

            }
        })
    }
    render=()=>{
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.addUm}>+1</button>
                <button onClick={this.subUm}>-1</button>
                <button onClick={this.reset}>reset</button>
                <h3>{this.state.count===0?"Contador não iniciado": "Contador Iniciado"}</h3>
            </div>
        )
    }
}

ReactDOM.render(<Contador />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
