let resposta

console.log("Qual e o seu número?")
process.stdin.once('data', function(data) {
    resposta = parseInt(data.toString().trim())
    imparOuPar(resposta)
    process.exit() // Encerra p processo
})

function imparOuPar(resposta) {
// fazer a resposta ser impar ou par como?
// se o numero for terminado em (1, 3, 5, 7, 9) é impar
// se o numero for divisível por 2 é par
}