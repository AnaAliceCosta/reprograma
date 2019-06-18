import React from 'react';
import PetCard from './PetCard';
class PetCardList extends React.Component{
    render(){
        return(
            <div>
                <PetCard
                        endereco='https://www.petz.com.br/blog/wp-content/uploads/2017/11/cachorrinho.jpg'
                        alt='cachorro olhar fofo'
                        nome='Belo Cachorro'
                        subtitulo='Que olhar de pidão, fofoooooo'
                        texto='Doggo ipsum what a nice floof long water shoob what a nice floof doge, puggo dat tungg tho. Borkdrive vvv dat tungg tho very jealous pupper, pupperino woofer. Ur givin me a spook heck wow such tempt such treat doggorino shoob snoot, puggo extremely cuuuuuute lotsa pats h*ck shoober. Pupperino what a nice floof heckin maximum borkdrive, very hand that feed shibe long woofer'
                        />
                <PetCard
                    endereco='https://image.cachorrogato.com.br/textimages/cachorrinho-ideal'
                    alt='cachorro no campo'
                    nome='Cachorro no campo'
                    subtitulo='amei este cachorrinho'
                    texto='Doggo ipsum what a nice floof long water shoob what a nice floof doge, puggo dat tungg tho. Borkdrive vvv dat tungg tho very jealous pupper, pupperino woofer. Ur givin me a spook heck wow such tempt such treat doggorino shoob snoot, puggo extremely cuuuuuute lotsa pats h*ck shoober. Pupperino what a nice floof heckin maximum borkdrive, very hand that feed shibe long woofer'
                    />
            </div>
        )}
}
export default PetCardList;