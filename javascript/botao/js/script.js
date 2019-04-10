function desliga() {
    var fundo = document.getElementById('fundo');
     console.log(fundo.style.background == 'white');
     if (fundo.style.background == "white"){
         console.log("entrou no if");
       fundo.style.background = "#BE479B";
    }else{
        console.log("nao passou lá");
        var corDoBackground= fundo.style.background ;
        console.log(corDoBackground);
    }

}