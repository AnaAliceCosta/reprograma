let criaInput = (type = "text",valor="")=>{
    return(`<input type=${type} value=${valor}> </input>`);

}
function teste(){

    formulario = document.getElementById('formulario');
    formulario.innerHTML = criaInput("text","oi");
}

teste();
