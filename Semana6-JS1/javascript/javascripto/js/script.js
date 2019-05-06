var elogios = [
    "Diva sem defeitos",
    "Não é github, mas é uma gatinha",
    "Maquina de vencer",
    "Universal",
    "Maravilhido",
    "Cristal",
    "Bombomzinho",
    "Um pão",
    "Joia rara"
]
function elogiar(){
    var random = Math.floor(Math.random() * elogios.length);
    document.getElementById("titulo").innerHTML = elogios[random];
    
}
document.onload(elogiar());