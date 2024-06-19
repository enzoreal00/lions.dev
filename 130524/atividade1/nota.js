let nota1
let nota2
console.log('Digite sua nota')
process.stdin.once('data', function (data) {
    nota1 = data.toString(). trim()

    console.log('Digite a sua note2')
    process.stdin.once('data', function (data) {
        nota1 = data.toString().trim()
        processamento(nota1, nota2)
        process.exit()
    })

})
function processamento(note1, note2) {
    let notas = []
      notas.push(nota1)
      notas.push(nota2)
      let calculo = (nota1+nota2) /2
      console.log('Sua nota é', calculo)


}