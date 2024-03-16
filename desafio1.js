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