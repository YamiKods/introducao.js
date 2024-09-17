function DividirPrimeiroEUltioPorDois(números){
    let primeiro = números[0]/2//divide o primeiro(0) por dois
    let ultimo = números[números.length-1]/2// dividindo o uúltimo por dois
    return[primeiro, ultimo]
}

//chamada
let arrayNumeros = [30, 10, 60, 50]
let resultado = DividirPrimeiroEUltioPorDois
(arrayNumeros)

console.log("novo array", resultado)