let numero
console.log('Digite um numero')
processamento.stdin.once('data', function(data) {
    numero = parseInt(data.toString().trim())
    processamento(numero)
    processamento.exit()
})

function processamento(numero) {
    if (numero % 5 == 0) {
        console.log(`numero ${numero} é divisivel por 5`)
    }else{
        console.log (`o numero ${numero} não é divisivel por 5`)
    }
}