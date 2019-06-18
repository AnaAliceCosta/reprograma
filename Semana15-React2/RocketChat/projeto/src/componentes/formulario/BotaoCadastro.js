import React from 'react'
export default function BotaoCadastro(props){
   return(

       <button className='botao-icone' onClick={()=> props.acaoBotao(props.valorImagem)}>
            <img src={props.srcImagem} alt={props.altImagem} className="botao-imagem"/>
            <span>{props.titulo}</span>
        </button>
    
       ) 
}