import React from 'react'
import './menu.css'
import {Link} from 'react-router-dom'

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            aberto:false
        }
    }

    handleAbreOuFecha = () => this.setState(prevState => ({ aberto: !prevState.aberto}) )
    
    

    render(){
        let classDasOpcoes = "navbar-menu__opcoes"
        let classDoBotao = "navbar-menu__botao"
        if(this.state.aberto){
            classDasOpcoes +=" navbar-menu__opcoes--aberto"
            classDoBotao +=" navbar-menu__botao--aberto"
        }

        return(
            <div className='navbar-menu navbar-links'>
                <button className={classDoBotao}onClick={this.handleAbreOuFecha}>Menu</button>
                <ul className={classDasOpcoes}>
                    <li>  <Link to="/" className='navbar-links__ativo'>Home</Link></li>
                    <li>  <Link to="/cadastro" className='navbar-links__ativo'>Cadastro</Link></li>
                    <li>  <Link to="/chat" className='navbar-links__ativo'>Chat</Link></li>
                </ul>
            </div>
        )
    }
}



