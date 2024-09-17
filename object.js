const carro = {
    marca : 'mazda' ,
    ano : 1997,
    funções: ['transporte', 'correr'],
    acelerar: function() {
        console.log('ligar, puxar freio de mão e pisar')
    },
    trocarMarcha: function() {
        console.log('trocar R para 1, 1 para 2, consequentemente até 6')
    },
}
carro.acelerar()