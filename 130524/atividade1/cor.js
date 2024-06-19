let coresF = ["preto", "azul", "verde"]
let coresEspeciais = []
let coresDoUser

console.log('Digite sua cor favorita')
process.stdin.once('data', function(data) {
    coresDoUser = data.toString().trim()
    processamento(coresDoUser)
    process.exit()
})

function processamento(coresDoUser) {
    if (coresF.includes(coresDoUser)) {
        console.log("A sua cor favorita é uma das favoritas da turma!")
    }else{
        console.log("a sua cor é diferente, vamos acidionar a sua lista!")
        coresEspeciais.push(coresDoUser)
    }
    console.log("cores favoritas: ", coresF)
    console.log("Cores especiais: ", coresEspeciais)
    console.log("Quantidade de cores: ", coresF.length)
}
