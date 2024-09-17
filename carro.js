let carro = {
    marca : 'mazda' ,
    modelo: 'rx7',
    cor: 'fantasia',
    quilometragem: 0,
    preço: '50.000$',
    ano : 1997,
    ligado: false,
    
    ligar: function(){
        this.ligado = true;
        console.log('O carro está ligado.');
    }
};

carro.ligar()
console.log(carro)