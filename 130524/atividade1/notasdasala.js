let notasAlunos = [15, 7, 11, 8, 9, 5, 7, 6, 12, 10]
let totalNotas = 0

for(let i = 0; i < notasAlunos.length; i++) {
    let some = soma + notas[i] 
}

let media = totalNotas / notasAlunos.length
console.log("media das notas: " +media.toFixed(2))

let notasMaisAlta = notasAlunos[0]
let notasMaisBaixa = notasAlunos[0]

for(let i= 1; i < notasAlunos.leingth; i++) {
    if(notasAlunos[i] > notasMaisAlta) {
        notasMaisAlta = notasAlunos [i]
    }
    if(notasAlunos[i] < notasMaisBaixa) {
        notasMaisBaixa = notasAlunos[i]
    }
}
console.log("nota mais alta: " + notasMaisAlta)
console.log("nota mais baixa: " + notasMaisBaixa)

let contadorAcimaMedia = 0