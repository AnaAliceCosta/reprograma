import React from 'react'
import './cadastro.css'
import Inicial from './cadastro/Inicial'

export default class Cadastro extends React.Component{
    constructor(props){
        super(props)
        this.state={
            

        }
    }
    render(){

        return(
            <div className="cadastro">
                <Inicial/>
            </div>
        )
    }
}
