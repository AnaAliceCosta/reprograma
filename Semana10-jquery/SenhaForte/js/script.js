$('#senha').keyup(function(){
    var senha = $(this).val();
    var forca = 0;

    if(senha.length  > 4){
        forca+=25;
        console.log('TAMANHO');

    }
    var validaNumero = new RegExp(/[0-9]/);
    if(validaNumero.test(senha)){
        forca+=25;
        console.log('NUMERO');

    }
    var validaMaiuscula = new RegExp(/[A-Z]/);
    if (validaMaiuscula.test(senha)){
        forca+=25
        console.log('MAIUSCULA');

    }
    var caracterEspecial = new RegExp(/[^a-zA-Z0-9]/);
    if(caracterEspecial.test(senha)){
        forca+= 25;
        console.log('ESPECIAIS');
    }
    $('#forca').html(`força ${forca} - Senha:${senha}` )

})