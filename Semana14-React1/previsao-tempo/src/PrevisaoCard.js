import React,{Component} from 'react';
import './previsaoCard.css'
import { directive } from '@babel/types';

class PrevisaoCard extends Component{
    render(){
        return (
            <div className='previsao'>
                <h2 className="previsao__data">{this.props.data}</h2>
                <p className='previsao__resumo'>{this.props.resumo}</p>
                <img className='previsao__img' src={this.props.imagem}/>
                <table className='previsao-temperatura'>
                    <tr>    
                        <th>Maximo</th>
                        <td>{this.props.temperatura.max +"°C"}</td>
                    </tr>
                    <tr className='previsao-temperadura__linha'>
                        <th>Minimo</th>
                        <td>{this.props.temperatura.min+"°C"}</td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default PrevisaoCard