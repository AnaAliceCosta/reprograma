import React from 'react'
import '../cadastro.css'
import BotaoCadastro from '../../componentes/formulario/BotaoCadastro'
import Asronauta from '../../imagens/astronaut.png'
import Globo from '../../imagens/globe.png'

export default function Inicial(props){
        return(
            <div className="pagina">
                <h1>Escolha qual tipo de cadsatro:</h1>
                <div className="pagina__botao">
                    <BotaoCadastro 
                        srcImagem= {Asronauta}
                        altImagem='icone Astronauta'
                        titulo = 'Pessoa Física'
                        valorImagem="PF"
                        acaoBotao = {props.alteraConteudo}
                        
                    />
                    

                    <BotaoCadastro 
                        srcImagem= {Globo}
                        altImagem='icone Globo'
                        titulo = 'Pessoa Jurídica'
                        valorImagem="PJ"
                        acaoBotao = {props.alteraConteudo}
                    />
                    
                </div>

            </div>
        )
}