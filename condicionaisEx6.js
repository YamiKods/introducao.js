function perfil(idade, ensinomedio, OutraFaculdade){

if (ensinomedio && idade >= 18 && !OutraFaculdade){
return "Você pode estudar na faculdade"
}
else {
    return "sinto muito, você não passou"
}

}
let ensinomedio = true
let idade = 40
let OutraFaculdade = false

let resultado = perfil(idade, ensinomedio, OutraFaculdade)
console.log(resultado)