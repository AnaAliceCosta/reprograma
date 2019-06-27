import React, { Component, Fragment } from 'react'
import Cabecalho from '../../components/Cabecalho'
import Widget from '../../components/Widget'

import './loginPage.css'
//import { stringify } from 'querystring';

class LoginPage extends Component {

    fazerLogin = (e)=>{
        e.preventDefault();
        const dadosDeLogin={
            login:this.inputLogin.value,
            senha:this.inputSenha.value
        }
        fetch('http://localhost:3001/login',{
            method:'POST',
            body: JSON.stringify(dadosDeLogin)
        })
        .then(res=> {
            if(!res.ok)
                throw res
            return res.json()})
        .then(res=> {
            localStorage.setItem('token',res.token)
            this.props.history.push('/')
        })
        .catch(erro => console.log(erro))
    }

    render() {
        return (
            <Fragment>
                <Cabecalho />
                <div className="loginPage">
                    <div className="container">
                        <Widget>
                            <h2 className="loginPage__title">Seja bem vindo!</h2>
                            <form className="loginPage__form" action="/" onSubmit={this.fazerLogin} >
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="login">Login</label> 
                                    <input 
                                    ref={elementoInput=> this.inputLogin = elementoInput}
                                    className="loginPage__input" 
                                    type="text" 
                                    id="login" 
                                    name="login"
                                    defaultValue='vanessametonini'/>
                                </div>
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="senha">Senha</label> 
                                    <input 
                                    ref={elementoSenha => this.inputSenha = elementoSenha}
                                    className="loginPage__input" 
                                    type="password" 
                                    id="senha" 
                                    name="senha"
                                    defaultValue='123456'/>
                                </div>
                                {/* <div className="loginPage__errorBox">
                                    Mensagem de erro!
                                </div> */}
                                <div className="loginPage__inputWrap">
                                    <button className="loginPage__btnLogin" type="submit">
                                        Logar
                                    </button>
                                </div>
                            </form>
                        </Widget>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default LoginPage