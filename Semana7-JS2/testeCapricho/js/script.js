let tituloTest;
let respostas = new Object();
let perguntas;
let contador = 0;
let soma = [0, 0, 0];

window.onload = () => {
    let tituloTeste = "Descubra se você esta usando as artimanhas certas para conquistar o gato.";
    perguntas = [
        'Quando vocês está afim de um garoto da escola alguem fica sabendo?',
        'Em relacao ao visu,voce:',
        'como voce age quando esta na balada?',
        'Voce ficou com um cara da escola.Dai, no dia seguinte:',
        'uma colega conta que aquele menino da escola esta interessado em você, Qual sua reação?'
    ];
    respostas['Quando vocês está afim de um garoto da escola alguem fica sabendo?'] = [
        'Caro que sim! voce divulga a noticia para o colegio inteiro assim fica mais facil dele ficar sabendo',
        'So as colegas que que podem dar informações suficiente sobre o boy',
        'So conta para as BFFs, no maior segredo'
    ];
    respostas['Em relacao ao visu,voce:'] = [
        'Esta sempre de saia curta, vestidinhos e salto altissimo.claro',
        'Esta sempre bem produzida, até para ir à padaria',
        'Faz o tipo esportiva, não dispensa uma calça jeans e um tenis, tudo bem confortavel'

    ];
    respostas['como voce age quando esta na balada?'] = [
        'Paquera todos os caras, inclusive os que estão acompanhados.',
        'Nao constuma paquerar muito, pois são poucos os garotos que merecem sua atençao.',
        'Faz amizade com a balada inteira, principalmente com os meninos.'

    ]
    respostas['Voce ficou com um cara da escola.Dai, no dia seguinte:'] = [
        'Sai espalhando para todo mundo que nao vai demorar para virar namorado',
        'Mal cumprimenta o menino quando encontra no corredor',
        'Cumprimenta e bate um papo com ele como se nada tivesse acontecido'

    ]
    respostas['uma colega conta que aquele menino da escola esta interessado em você, Qual sua reação?'] = [
        'Começa a persegui-lo no recreio e faz plantão na frente da sala dele.',
        'Não liga, dizendo que preferia mesmo ser notada pelo gato do terceiro ano',
        'Faz amizade com o menino.'
    ]
    document.getElementById('nomeTeste').textContent = tituloTeste;
    montaPergunta();



}

function montaPergunta() {

    document.getElementById('pergunta').textContent = perguntas[contador];
    let resposta = document.getElementById('resposta');
    resposta.innerHTML = "";
    let valor = 0;
    if (contador < perguntas.length) {
        respostas[perguntas[contador]].forEach(element => {
            resposta.innerHTML += `<input type="radio" name="resposta" id="${element}" value="${valor}">
        <label for='${element}'>${element}</label><br>`
            valor++;
        });


        let listaRespostas = document.getElementsByName("resposta");
        listaRespostas.forEach(conteudo => {
            conteudo.addEventListener('click', computaResposta);
        });

        contador++;
    }else{
        veredicto()
    }


}

function computaResposta() {

    let selecao = document.querySelector("input[name='resposta']:checked").value;
    soma[selecao]++;
    console.log(soma);
    montaPergunta();



}

function veredicto(){
    const marioriaA = "<p>Para você é moleza se aproximar dos meninos, o problema é que este entusiasmo todo pode nao ser bem visto pelos boys, de uma maneirada no seu estilo terrorista de paqueirar</p>";
    const marioriaB = "<p>Eita menina exigemte! do jeito que voce se comporta até parece que menino nenhum é o suficiente  para o seu bico. Será que você não está sonhando demais com um principe encantado que não existe?</p>";
    const marioriaC = "<p>Você tem um talento invejável para atrair os garotos... mas como amiga. Sabe o que está faltando? usar seu poder de sedução para criar um clima.</p>";



    if (soma[0]> soma[1] && soma[0]> soma[2] ){
        resposta.innerHTML =marioriaA
    } else if (soma[1]> soma[0] && soma[1]> soma[2] ){
        resposta.innerHTML = marioriaB
    }else if (soma[2]> soma[0] && soma[2]> soma[1] ){
        resposta.innerHTML = marioriaC
    }else if(soma[0]==soma[1]){
        resposta.innerHTML = marioriaA
        resposta.innerHTML += marioriaB;
        
    }else if(soma[0]==soma[2]){
        resposta.innerHTML = marioriaA;
        resposta.innerHTML += marioriaC;
        
    }else{
        resposta.innerHTML = marioriaB;
        resposta.innerHTML += marioriaC;
        
    }

}