const body = document.querySelector("body");
const h1 = document.createElement("h1");
h1.innerHTML = "Jogo da Velha";
body.appendChild(h1);
const section = document.createElement("section");
body.appendChild(section);
const h2 = document.createElement("h2");
h2.innerHTML = "Escolha com qual vai jogar:";

const div = document.createElement("div");
div.appendChild(h2);
const divButton = document.createElement("div");
section.appendChild(div);
div.className = "card_selecao";
divButton.className = "card_buttons";
const btnO = document.createElement("button");
const btnX = document.createElement("button");
btnO.innerHTML = "O";
btnX.innerHTML = "X";
div.appendChild(divButton);
divButton.appendChild(btnO);
divButton.appendChild(btnX);

let jogador;

btnO.addEventListener("click", function (e) {
    console.log("voce escolheu jogar com O")
    jogador = "o";
    criarTabuleiro()
});
btnX.addEventListener("click", function (e) {
    console.log("voce escolheu jogar com X")
    jogador = "x";
    criarTabuleiro()
})

const tabuleiro = [
    [], [], [],
    [], [], [],
    [], [], []
]



function criarTabuleiro() {
    section.innerHTML = "";

    for ( let i = 1; i < 10; i++) {
        const div = document.createElement("div");
        div.className = `div${i}`
        div.addEventListener("click", function (e) {
            div.innerHTML = jogador;
            
            console.log(`div${i}`)
        })
        section.appendChild(div)
    }
  section.style.display = "flex";
  section.style.boxShadow = "0 0 1em #000";
}

function jogadAleatoria () {
    let random = Math.floor((Math.random() * 10) + 1);
    console.log("random", random)
}
