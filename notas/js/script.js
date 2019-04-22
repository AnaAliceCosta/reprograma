function calcular() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let media = (nota1 + nota2) / 2;
    let resposta;
    if(media == 10){
        resposta ='Aprovado com louvor';
    }else if(media >= 7){
        resposta='aprovado';
    }else{
        resposta = 'reprovado';
    }
    alert(media );
    
}