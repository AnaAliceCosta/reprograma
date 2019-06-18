import React from 'react'
import './cadastro.css'
import PessoaFisica from './cadastro/PessoaFisica'
import PessoaJuridica from './cadastro/PessoaFisica'
import Inicial from './cadastro/Inicial'

export default class Cadastro extends React.Component{
    constructor(props){
        super(props)
        this.state={
            conteudo:undefined
        }
    }

    handleMudaConteudo = conteudo => this.setState({conteudo})

    render(){

        return(
            <div className="cadastro">
                {!this.state.conteudo && <Inicial alteraConteudo={this.handleMudaConteudo}/>}
                {this.state.conteudo ==="PF" && <PessoaFisica/>}
                {this.state.conteudo ==="PJ" && <PessoaJuridica/>}
            </div>
        )
    }
}
