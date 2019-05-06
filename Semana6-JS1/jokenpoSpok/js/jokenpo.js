const mae = document.querySelector(".clicavel");
const jogador = document.querySelector(".escolha-usuario");
const computador = document.querySelector(".escolha-computador");
const opcoes = ["pedra", "papel", "tesoura", "lagarto", "spock"]
mae.addEventListener("click", event => {
    let escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
    let escolhaUsuario = event.target.id;
    let campoVencedor = document.getElementById("vencedor");

    jogador.innerHTML = `<h3>Você escolheu</h3>
                         <img class="clicavel__img" src="img/${escolhaUsuario}.png" alt=${escolhaUsuario}></img>`;
    computador.innerHTML = `<h3>O Computador escolheu</h3>
                         <img class="clicavel__img" src="img/${escolhaComputador}.png" alt=${escolhaComputador}></img>`;

    if (escolheVencedor(escolhaUsuario,escolhaComputador) == "jogador") {
        campoVencedor.textContent = "Você venceu!!!😊";
    } else if (escolheVencedor(escolhaUsuario, escolhaComputador) == "computador") {
        campoVencedor.textContent = "Computador Venceu 😭";
    } else {
        campoVencedor.textContent = "Empate 😡";
    }
});

function escolheVencedor(escolhaUsuario, escolhaComputador) {
    let vencedor;

    switch (escolhaUsuario) {
        case "pedra":
            if (escolhaComputador == "lagarto" || escolhaComputador == "tesoura") {
                vencedor = "jogador";
            } else if (escolhaComputador == "pedra") {
                vencedor = "empate";
            } else {
                vencedor = "computador";
            }

            break;
        case "papel":
            if (escolhaComputador == "pedra" || escolhaComputador == "spock") {
                console.log("passou aqui");
                vencedor = "jogador";
            } else if (escolhaComputador == "papel") {
                vencedor = "empate";
            } else {
                vencedor = "computador";
            }
            break;
        case "tesoura":
            if (escolhaComputador == "lagarto" || escolhaComputador == "papel") {
                vencedor = "jogador";
            } else if (escolhaComputador == "tesoura") {
                vencedor = "empate";
            } else {
                vencedor = "computador";
            }
            break;
        case "lagarto":
            if (escolhaComputador == "spock" || escolhaComputador == "papel") {
                vencedor = "jogador";
            } else if (escolhaComputador == "lagarto") {
                vencedor = "empate";
            } else {
                vencedor = "computador";
            }
            break;
        case "spock":
            if (escolhaComputador == "pedra" || escolhaComputador == "tesoura") {
                vencedor = "jogador";
            } else if (escolhaComputador == "spock") {
                vencedor = "empate";
            } else {
                vencedor = "computador";
            }
            break;
        default:
            console.log("nao passou por nennhum");
            break;
    } 
    return vencedor;

}