btnSinglePlayer.addEventListener("click", function (e) {
    modo_de_jogo = "singleplayer";
    divButton.innerHTML = "";
    divButton.appendChild(btnX);
    divButton.appendChild(btnO);
});

btnMultPlayer.addEventListener("click", function (e) {
    modo_de_jogo = "multiplayer";
    divButton.innerHTML = "";
    divButton.appendChild(btnX);
    divButton.appendChild(btnO);
});

buttonExit.addEventListener("click", function (e) {
    section.innerHTML = "";
    if ( modo_de_jogo == "singleplayer") {
        criarTabuleiroSinglePlayer()
    }
    if ( modo_de_jogo == "multiĺayer" ) {
        criarTabuleiroMultiPlayer()
    }
})


btnO.addEventListener("click", function (e) {
    player1 = "o";
    player2 = "x";
    if ( modo_de_jogo == "singleplayer") {
        criarTabuleiroSinglePlayer();
    }
    else {
        criarTabuleiroMultiPlayer();
    };
});
btnX.addEventListener("click", function (e) {
    player1 = "x";
    player2 = "o";
    if ( modo_de_jogo == "singleplayer") {
        criarTabuleiroSinglePlayer();
    }
    else {
        criarTabuleiroMultiPlayer();
    };
});


function criarTabuleiroMultiPlayer() {
    divPontos.style.display = "flex";
    spanX.innerText = `X   -   ${pontos_x}`;
    spanO.innerText = `O   -   ${pontos_o}`;
    section.innerHTML = "";
    numberJogadas.innerText = "jogadas: 0";
    vez = player1;
    
    for ( let i = 0; i < 9; i++ ) {
        const div = document.createElement("div");
        
        div.className = `div${i + 1}`;

        div.addEventListener("click", function (e) {
            if ( tabuleiro[i][0] === '' ) {
                tabuleiro[i].splice(0, 1, vez);
                div.innerHTML = vez;
                jogadas = jogadas + 1;
                numberJogadas.innerText = `jogadas: ${jogadas}`;

                if ((jogadas % 2) == 0) {
                    vez = player1;
                };
                if ((jogadas % 2) !== 0) {
                    vez = player2;
                };

                verifyVictory();
            };
        });
        
        section.appendChild(div);

    };

    section.style.display = "flex";
  section.style.boxShadow = "0 0 1em #000";

};

function criarTabuleiroSinglePlayer() {
    divPontos.style.display = "flex";
    spanX.innerText = `X   -   ${pontos_x}`;
    spanO.innerText = `O   -   ${pontos_o}`;
    section.innerHTML = "";
    numberJogadas.innerText = "jogadas: 0";
    vez = player1;
    
    for ( let i = 0; i < 9; i++ ) {
        const div = document.createElement("div");
        div.className = `div${i + 1}`;
        div.addEventListener("click", function (e) {

            if ( tabuleiro[i][0] === '' ) {
                tabuleiro[i].splice(0, 1, vez);
                div.innerHTML = player1;
                jogadas = jogadas + 1;
                numberJogadas.innerText = `jogadas: ${jogadas}`;
                jogadaAleatoria();
                verifyVictory();
            };
        });
         
        section.appendChild(div);
    };
    section.style.display = "flex";
  section.style.boxShadow = "0 0 1em #000";
};


function jogadaAleatoria () {
    if ( jogadas == 9 ) {
        return false;
    };
    jogadas = jogadas + 1;
    numberJogadas.innerText = `jogadas: ${jogadas}`;
    let random = Math.floor((Math.random() * 9));
    let random2;
    let marcado = false;

    while ( marcado == false ) {
        random2 = Math.floor((Math.random() * 9));
        let selecao = document.querySelector(`.div${random2 + 1}`);

        if ( tabuleiro[random2][0] == "" ) {
            selecao.innerText = player2;
            tabuleiro[random2].splice(0, 1, player2);
            marcado = true;
            return marcado;
        };
    };
};


function resetTableAndResult (num) {
    jogadas = 0
    numberJogadas.innerText = "jogadas: 0"

    for (let i = 1; i < 10; i++) {
        let div = document.querySelector(`.div${i}`)
        div.innerHTML = ""
    }

    if ( tabuleiro[num][0] == player2 ) {
        if ( player2 == "x" ) {
            pontos_x = pontos_x + 1;
            spanX.innerText = `x  -  ${pontos_x}`
        }
        if ( player2 == "o" ) {
            pontos_o = pontos_o + 1;
            spanO.innerText = `o  -  ${pontos_o}`
        }
        tabuleiro = [[""], [""], [""], [""], [""], [""], [""], [""], [""]];
        h3.innerText = "Que pena, vocẽ perdeu!"
        section.appendChild(modalVitoria)
        return "Derrota!";
    };

    if ( player1 == "x" ) {
        pontos_x = pontos_x + 1;
        spanX.innerText = `x  -  ${pontos_x}`
    }
    if ( player1 == "o" ) {
        pontos_o = pontos_o + 1;
        spanO.innerText = `o  -  ${pontos_o}`
    }
    tabuleiro = [[""], [""], [""], [""], [""], [""], [""], [""], [""]];
    h3.innerText = "Parabens, vocẽ venceu!"
    section.appendChild(modalVitoria)
    return "Vitoria!";
}


function verifyVictory () {
    if ( tabuleiro[0][0] == tabuleiro[1][0] && tabuleiro[1][0] == tabuleiro[2][0] && tabuleiro[0][0] !== "" ) {
        resetTableAndResult(0)
    }
    if ( tabuleiro[3][0] == tabuleiro[4][0] && tabuleiro[4][0] == tabuleiro[5][0] && tabuleiro[3][0] !== "") {
        resetTableAndResult(3)
    }
    if ( tabuleiro[6][0] == tabuleiro[7][0] && tabuleiro[7][0] == tabuleiro[8][0] && tabuleiro[6][0] !== "") {
        resetTableAndResult(6)
    }
    if ( tabuleiro[0][0] == tabuleiro[3][0] && tabuleiro[3][0] == tabuleiro[6][0] && tabuleiro[0][0] !== "") {
        resetTableAndResult(0)
    }
    if ( tabuleiro[1][0] == tabuleiro[4][0] && tabuleiro[4][0] == tabuleiro[7][0] && tabuleiro[1][0] !== "") {
        resetTableAndResult(1)
    }
    if ( tabuleiro[2][0] == tabuleiro[5][0] && tabuleiro[5][0] == tabuleiro[8][0] && tabuleiro[2][0] !== "") {
        resetTableAndResult(2)
    }
    if ( tabuleiro[0][0] == tabuleiro[4][0] && tabuleiro[4][0] == tabuleiro[8][0] && tabuleiro[0][0] !== "") {
        resetTableAndResult(0)
    }
    if ( tabuleiro[2][0] == tabuleiro[4][0] && tabuleiro[4][0] == tabuleiro[6][0] && tabuleiro[2][0] !== "") {
        resetTableAndResult(2)
    };

    if (jogadas == 9) {
        for (let i = 1; i < 10; i++) {
            tabuleiro = [[""], [""], [""], [""], [""], [""], [""], [""], [""]]
            let div = document.querySelector(`.div${i}`)
            div.innerHTML = ""
        }
        h3.innerText = "Empate!"
        section.appendChild(modalVitoria)
        return alert("Empate!");    
    };
};
