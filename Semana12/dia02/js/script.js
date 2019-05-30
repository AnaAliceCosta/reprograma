
function adicionaLi(){
    let resultado = document.getElementById('numero');
    let listaResultados =document.getElementById('lista');
    let anosExperincia = parseInt(resultado.value);
    let nivel;
    resultado.value ="";
    console.log(anosExperincia, typeof(anosExperincia));
    if(anosExperincia <=1){
        nivel = "iniciante";
    }
    else if(anosExperincia <=3){
        nivel= "intermediário";
    }else if(anosExperincia<=6){
        nivel="avançado"
    }else if(anosExperincia>=7 ){
        nivel = "Mestre Jedi"
    }
    console.log(nivel);
    let novaLi = document.createElement('li');
    novaLi.textContent = nivel;
    listaResultados.appendChild(novaLi);
}

document.getElementById("botao").addEventListener('click',function(event){
    event.preventDefault();
    adicionaLi();
});

