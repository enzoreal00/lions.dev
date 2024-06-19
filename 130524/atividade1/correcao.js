// Lista de notas dos alunos
let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0];
let soma = 0
let media = 0
let notamaxima = notas[0]
let notaminima = notas[0]
let acima6 = []
let abaixo6 = 0
for (let i = 0; i < notas.length; i++) {
    soma += notas[i] 
    
}
media = soma /notas.length
console.log(media)




for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= notamaxima) {
        notamaxima = notas[i]

    } else if(notas[i] <= notaminima) {
        notaminima = notas[i]

}
}
console.log(notamaxima)
console.log(notaminima)





for (let i = 0; i < notas.length; i++) {
    if (notas[i] > 6) {
        acima6.push(notas[i])
        
    }   
}
console.log(`${acima6}`)




notas.push(40)
console.log(`${notas}`)


for (let i = 0; i < notas.length; i++) {
    if (notas[i] <= 6) {
        abaixo6++
    }
    
}
console.log(`${abaixo6}`)