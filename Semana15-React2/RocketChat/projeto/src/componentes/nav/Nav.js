import React from 'react'
import './nav.css'
import logo from '../../imagens/RocketChat.png'
import Menu from './menu/Menu'

export default function Nav(props){
    return(
        <nav className='navbar'>
            <div>
                <img className='navbar-logo'src={logo} alt='logotipo do RocketChat'/>
            </div>
            <Menu/>
        </nav>
    )
}
