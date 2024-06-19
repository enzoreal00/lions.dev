let nota
console.log('Qual foi sua nota?')
process.stdin.once('data', function(data) {
    nota = Number (data.toString().trim())
    processamento(nota)
    process.exit()
})
function processamento(data) {
    switch (true) {
        case nota >= 90 && nota <=100:
            nota = "a"
            return nota
        case nota >= 80 && nota <=89:
            nota = "b"
            return nota
        case nota >= 70 && nota <=79:
            nota = "c"
            return nota
        case nota >= 60 && nota <=69:
            nota = "d"
            return nota
        case nota >= 50 && nota <=59:
            nota = "f"
            return nota

        default:
        break;
    }
}
function classificar(nota) {
    let notasclassificado = processo(nota)
    if (notaclassificado =="a") {
        console.log(`Parabéns você foi aprovado sua nota é ${nota}`)
    } else if (notaclassificado =="b") {
        console.log(`Parabéns você foi aprovado sua nota é ${nota}`)
    } else if (notaclassificado == "c") {
        console.log(`Parabens você foi aprovado sua nota é ${nota}`)
    } else if (notaclassificado == "d") {
        console.log(`você foi reprovado sua nota é ${nota}`)
    } else if (notaclassificado =="f") {
        console.log(`você foi reprovado sua nota é ${nota}`)
    }
}