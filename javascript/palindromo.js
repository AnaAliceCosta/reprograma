function removerEspacos(palavra){
while(palavra.indexOf(" ") != -1){
    palavra = palavra.replace(" ", "");
    return palavra;
}
}
function palindromo(palavra){
    //var palavra = document.getElementById("input").value.toCase();
    // var resposta -- document.getlementById("resposta");
    var resposta = "eh ";
    palavra = removerEspacos(palavra);
    for(var i = 0;i<= palavra.length ;i++){
        if(palavra[i] != palavra[palavra.length -1- i]){
            console.log(palavra);
            return resposta = "nao eh";
        }
    }
  

    return resposta;
}
console.log(palindromo("socorram me subi no onibus em marrocos"));


