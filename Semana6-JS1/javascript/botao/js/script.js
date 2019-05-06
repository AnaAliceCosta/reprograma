function desliga() {
    var fundo = document.getElementById('fundo');

    if (fundo.classList.contains("background-red")){
        fundo.classList.remove("background-red");
        fundo.classList.add("background-white");
    }
    else{
        fundo.classList.remove("background-white");
        fundo.classList.add("background-red");
    }

}

