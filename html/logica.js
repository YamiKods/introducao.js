function solicitarNumeros(){
    let soma = 0 //variável para guardar a soma dos números inseridos
    let numero //variável para guardar o número inserido pelo usuário
    let index = 1// índice para indicar a ordem das entradas do usuário
    //fazendo o loop do...while que continua até o usuário inserir o número 0(condição de pare)
    do{
        //solicitando ao uisuário que insira um número, com a indicação do índice
        numero = parseInt(prompt("Insira um número " + index + " (0 para sair):"))
        //verificando se o valor é um número válido
        if(!isNaN(numero)){
            soma + numero //somando o número inserido ao total
            index++ //Incrementa o índice para a próxima entrada

        }else{
            //caso o valor inserido não seja um número, exibe um alerta ao usuário
            alert("Por favor, insira um número válido!")
        }
    } while(numero!== 0) //o loop para quando o usuário insere o "0"
    // a soma dos números no elemento HTML com o id 'resultado'
    document.getElementById("resultado").innerHTML = " A soma dos números é: " +soma
}