let valorCompra = 433.00;

if (valorCompra <= 100) {
    console.log("valor final: R$ " + valorCompra.toFixed(2));
}

else if (valorCompra > 100 && valorCompra <=500) {
    let desconto = valorCompra * 0.10
    console.log("desconto: R$" + (valorCompra - desconto).toFixed(2))
}

else {
    let desconto = valorCompra * 0.15
    console.log("Valor Final: R$" + (valorCompra - desconto).toFixed(2))
}