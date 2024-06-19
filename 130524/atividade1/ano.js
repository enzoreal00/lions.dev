let idade
let nome

console.log('Como é o seu nome')
 
process.stdin.once('data', function(data) {
    nome = data.toString(), trim()
    console.log('Qual é a sua idade?')

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })
})
function processamento(nome, idade) {
    console.log('Olá ($nome), você tem $(idade) anos')
}