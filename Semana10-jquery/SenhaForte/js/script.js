$('#senha').keyup(function(){
    var senha = $(this).val();
    var score = 0;
    var forca="";

    if(senha.length  > 4){
        score+=25;
        console.log('TAMANHO');

    }
    var validaNumero = new RegExp(/[0-9]/);
    if(validaNumero.test(senha)){
        score+=25;
        console.log('NUMERO');

    }
    var validaMaiuscula = new RegExp(/[A-Z]/);
    if (validaMaiuscula.test(senha)){
        score+=25
        console.log('MAIUSCULA');

    }
    var caracterEspecial = new RegExp(/[^a-zA-Z0-9]/);
    if(caracterEspecial.test(senha)){
        score+= 25;
        console.log('ESPECIAIS');
    }
    if(score<50){
        forca="Fraca";
    }else if(score<75){
        forca="Media"
    }else{
        forca="Forte"
    }
    $('#forca').html(`força ${forca} - Senha:${senha}` )

})