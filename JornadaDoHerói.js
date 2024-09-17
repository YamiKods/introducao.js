//inv
BossItens = ["Kasaka's Venom Fang", "Knight Killer", "Baruka's Dagger",
 "Demon King's Daggers", "Demon King's Longsword", "Kamish's Wrath", "Antares' Fangs"]

 let inventarioInicial = ["adaga comum", "roupas normais"]
console.log(inventarioInicial)

let novoItem = "Wolf killer dagger";
inventarioInicial.push(novoItem);
console.log(inventarioInicial)

console.log("um goblin apareceu! Prepare-se para a batalha!");

//usar os itens
let WolfKillerDagger = inventarioInicial[2];
console.log(`você ataca o goblin com sua ${WolfKillerDagger}...`);
console.log("goblin foi derrotado e dropou 15 moedas")
