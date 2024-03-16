// Calculadora de partidas Rankeadas
let player = calcularRanking(93, 25)

console.log(player)
function  calcularRanking(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas
    let totalDePartidas = vitorias + derrotas
    let nivel
    if (vitorias < 10){
        nivel = 'Ferro'
    }else if ((vitorias >= 11) && (vitorias <=20)){
        nivel = 'Bronze'
    }else if ((vitorias >= 21) && (vitorias  <=50)){
        nivel = 'Prata'
    }else if ((vitorias >= 51) && (vitorias  <=80)){
        nivel = 'Ouro'
    }else if ((vitorias >= 81) && (vitorias <= 90)){
        nivel = 'Diamante'
    }else if ((vitorias >= 91) && (vitorias <= 100)){
        nivel = 'Lendário'
    }else {
        nivel = 'Imortal'
    }

    return  `Jogador com o saldo de ${saldoVitorias} vitórias, está no vível ${nivel}, e um total de ${totalDePartidas} partidas.`

}



// node desafio2.js

