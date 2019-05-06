let marcas;
let escolhidas;

function advinhacao() {
    marcas = ['angular', 'css3', 'github', 'html5', 'javascript', 'react', 'vscode'];
    escolhidas = [];
    const espacomarca = document.getElementById('logo');
    let espera;


    for (let i = 0; i <= 1; i++) {
        
        setTimeout(() => {
            let escolha = Math.floor(Math.random()* (marcas.length -1));
            console.log("tamanho do array =" + (marcas.length -1));
            console.log("numero sorteado= " +escolha);
            espacomarca.innerHTML = escolheMarca(escolha);
            espera *=i;
        }, (3000 * i));
        espera = 3000* (i+1);

    }
    setTimeout(() => {
        let ListaEscolhidas='';
        espacomarca.innerHTML="";
        escolhidas.forEach(escolhida=>{
            ListaEscolhidas += `<li> ${escolhida}</li>`;
        });
        espacomarca.innerHTML=`<ul>${ListaEscolhidas}</ul>`
    }, espera);
}

function escolheMarca(numero) {
    let marca = marcas[numero];
    escolhidas.push(marca);
    marcas.splice(numero,1);
    console.log(marcas);

    return `<img src="img/${marca}.png" alt="logomarca ${marca}" class='marca_img'>`

}