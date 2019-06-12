import React from 'react';
import './pet.css';

class PetCard extends React.Component {

  render(){return (
    <div className="comentario">
      <img className='comentario__perfil' src={this.props.endereco} alt={this.props.alt} />
      <div>
        <h2 className='comentario__nome'>{this.props.nome}</h2>
        <h3 className='comentario__subtitulo'>{this.props.subtitulo}</h3>
        <hr/>
        <p>{this.props.texto}</p>
      </div>
    </div>
  )}
}

export default PetCard;