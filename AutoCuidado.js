//função para gerar um adjetivo de qualidade
function GerarAdjetivo(nome) {
    //lista de adjetivos para dias ruins
    const adjetivos = ["é inteligente", "é compreensivo", "é ouvinte", "é maluco", "tem 50 reais preso no nubank"]
//gerar um índice aleatório para escolher um adjetivo
const IndiceAleatório = Math.floor(Math.random()*adjetivos.length)
//math.floor arredonda o número para baixo
//math.random() randomizar

return nome + " você " + adjetivos[IndiceAleatório]

}

console.log(GerarAdjetivo("Kaue"))//


