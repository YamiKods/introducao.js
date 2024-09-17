function CalcularMédia (n1,n2,n3,n4,n5){

    let media = (n1 + n2 + n3 +n4 +n5) / 5
    return `Sua média é`, media
}

let NotasKaique = CalcularMédia(8.5, 7.0, 6.5, 4.5, 3.7)
console.log("A nota do Kaique é:",NotasKaique.toFixed(2))

let NotasKaue = CalcularMédia(8.8, 7.7, 6.4, 8,2, 5.6)
console.log("A nota do kaue é:", NotasKaue.toFixed(2))