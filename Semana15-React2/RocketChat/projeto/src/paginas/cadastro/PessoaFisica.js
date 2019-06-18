import React from 'react'
import Legenda from '../../componentes/formulario/Legenda'
import CaixaTexto from '../../componentes/formulario/CaixaTexto';


export default class PessoaFisica extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            nomeSobrenome:{valor:"",erro:''},
            numeroCPF:{valor:"",erro:''},
            dataNascimento:{valor:"",erro:''},
            email:{valor:"",erro:''},
            senha:{valor:"",erro:''}
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log("enviou")
    }

    handleChange = (nomeInput,valorInput,erro='') => this.setState({
        [nomeInput]: {valor: valorInput, erro:erro}
    })

    render(){
        return(
            <div>
                <form className='formulario' onSubmit={this.handleSubmit}>
                    <div>
                        <Legenda htmlForLegenda="nomeSobrenome"> Nome Completo: </Legenda>
                        <CaixaTexto
                            type='text' 
                            placeholder='nome' 
                            value={this.state.nomeSobrenome}
                            name='nomeSobrenome'
                            id='nomeSobrenome'
                            onChange={this.handleChange} />
                    </div>

                    <div>
                    <Legenda htmlForLegenda="numeroCPF"> CPF: </Legenda>
                    <CaixaTexto  
                            type='text' 
                            placeholder='000.000.000-00' 
                            value={this.state.numeroCPF}
                            name='numeroCPF'
                            id='numeroCPF'
                            onChange={this.handleChange}/>
                    </div>

                    <div>
                        <Legenda htmlForLegenda="dataNascimento"> Data de nascimento: </Legenda>
                        <CaixaTexto
                            type='text' placeholder='01/01/1900' 
                            value={this.state.dataNascimento}
                            name='dataNascimento'
                            id='dataNascimento'
                            onChange={this.handleChange}/>
                    </div>

                    <div>
                        <Legenda htmlForLegenda="email"> Email: </Legenda>
                        <CaixaTexto 
                            type='email' placeholder='nome@provedor.com' 
                            value={this.state.email}
                            name='email'
                            id='email'
                            onChange={this.handleChange}/>
                    </div>

                    <div>
                        <Legenda htmlForLegenda="senha"> Senha: </Legenda>
                        <CaixaTexto
                            type='password' placeholder='' 
                            value={this.state.senha}
                            name='senha'
                            id='senha'
                            onChange={this.handleChange}/>
                    </div>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}