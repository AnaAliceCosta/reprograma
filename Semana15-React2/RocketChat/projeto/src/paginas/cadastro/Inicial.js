import React from 'react'
import '../cadastro.css'
import Asronauta from '../../imagens/astronaut.png'
import Globo from '../../imagens/globe.png'

export default function Inicial(props){
        return(
            <div className="pagina">
                <h1>Escolha qual tipo de cadsatro:</h1>
                <div className="pagina__botao">
                    <button className='botao-icone'>
                        <img src={Asronauta} alt='icone astronauta' className="botao-imagem"/>
                        <span>Pessoa Física</span>
                    </button>
                    
                    <button className='botao-icone'>
                        <img src={Globo} alt='icone globo' className="botao-imagem"/>
                        <span>Pessoa Jurídica</span>
                    </button>
                </div>

            </div>
        )
}