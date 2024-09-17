
function CalcularDesconto(PreçoOriginal, Desconto) {
return Desconto = PreçoOriginal - (PreçoOriginal * Desconto/100)
}

PreçoOriginal = 100
Desconto = 15

Desconto = CalcularDesconto (PreçoOriginal, Desconto)
console.log("o valor com desconto é", Desconto)


