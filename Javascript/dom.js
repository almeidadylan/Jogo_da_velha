const btnSinglePlayer = document.createElement("button");
const btnMultPlayer = document.createElement("button");
const section = document.createElement("section");
const divButton = document.createElement("div");
const btnX = document.createElement("button");
const btnO = document.createElement("button");
const body = document.querySelector("body");
const div = document.createElement("div");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const h3 = document.createElement("h3");
const numberJogadas = document.createElement("h2");
const divPontos = document.createElement("div");
const spanX = document.createElement("span");
const spanO = document.createElement("span");
const modalVitoria = document.createElement("section");
const buttonExit = document.createElement("button");
const divFlex = document.createElement("div");
const divModal = document.createElement("div")


divButton.className = "card_buttons";
btnSinglePlayer.className = "modo_de_jogo";
btnMultPlayer.className = "modo_de_jogo";
divPontos.className = "div_pontos";
div.className = "card_selecao";
numberJogadas.className = "numero_de_jogadas";
buttonExit.className = "button_exit";
divFlex.className = "div_modal_upper";
divModal.className = "div_modal"
modalVitoria.setAttribute("id" , "modal_vitoria");

h2.innerHTML = "Escolha seu modo de jogo:";
h1.innerHTML = "Jogo da Velha";
btnO.innerHTML = "O";
btnX.innerHTML = "X";
btnSinglePlayer.innerHTML = "Single Player";
btnMultPlayer.innerHTML = "Multi Player";
buttonExit.innerText = "X"


body.appendChild(h1);
body.appendChild(numberJogadas)
body.appendChild(divPontos);
body.appendChild(section);
div.appendChild(h2);
section.appendChild(div);
div.appendChild(divButton);
divButton.appendChild(btnSinglePlayer);
divButton.appendChild(btnMultPlayer);
divPontos.appendChild(spanX);
divPontos.appendChild(spanO);
modalVitoria.appendChild(divFlex);
modalVitoria.appendChild(divModal);
divFlex.appendChild(h3);
divFlex.appendChild(buttonExit);