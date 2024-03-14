/*
Instruções para entrega
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/ 

// HERÓIS
let heroAquaman = {nome: 'Aquaman', xp: 6.024}
let heroSuperman = {nome: 'SuperMan', xp: 10.001}
let heroBatman = {nome: 'Batman', xp: 7.000}
let heroHomemAranha = {nome: 'Homem Aranha', xp: 5.000}
// NÍVEIS DE XP
let niveisDeXP = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante'] 

    if (heroAquaman.xp === 1.000){
        console.log(`O herói de nome ${heroAquaman.nome} está no nível de ${niveisDeXP[0]}`)
    }
    else if ((heroAquaman.xp >= 1.001) && (heroAquaman.xp <= 2.000)){
        console.log(`O herói de nome ${heroAquaman.nome} está no nível de ${niveisDeXP[1]}`)
    }
    else if((heroAquaman.xp >= 2.001)&& ( heroAquaman.xp <= 5.000)){
        console.log(`O herói de nome ${heroAquaman.nome} está no nível de ${niveisDeXP[2]}`)
    }
    else if ((heroAquaman.xp >= 5.001) && (heroAquaman.xp <= 7.000)){
        console.log(`O herói de nome ${heroAquaman.nome} está no nível de ${niveisDeXP[3]}`)
    }
    else if ((heroAquaman.xp  >= 7.001) && (heroAquaman.xp  <= 8.000)) {
        console.log(`O herói de nome ${heroAquaman.nome} está no nível de ${niveisDeXP[4]}`)
    }
    else if ((heroAquaman.xp >= 8.001) && (heroAquaman.xp <= 9.000)) {
        console.log(`O herói de nome ${heroAquaman.nome} está no nível de ${niveisDeXP[5]}`)
    }
    else if ((heroAquaman.xp >= 9.001) && (heroAquaman.xp < 10.000)) {
        console.log(`O herói de nome ${heroAquaman.nome} está no nível de ${niveisDeXP[6]}`)
    } 
    else if (heroAquaman.xp >= 10.001) {
        console.log(`O herói de nome ${heroAquaman.nome} está no nível de ${niveisDeXP[7]}`)
    }
        
        



// node projeto.js