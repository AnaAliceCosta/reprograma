let lista = ["JavaScript", "ES5", "ES6", "React"]
let criaInput = (type = "text",valor="")=>{
    return(`<input type=${type} value=${valor}> </input>`);

}
let criaLi = (texto)=>{
    return (`<li>${texto}</li>`)
}
function teste(){

    formulario = document.getElementById('formulario');
    formulario.appendChild = criaInput("text","oi");
    let listaUL = document.getElementById("habilidades");
    lista.forEach(valor,listaUL.appendChild(criaLi(valor)));
}

teste();
