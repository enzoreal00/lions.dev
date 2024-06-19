let nome 
let idade
let aniversario

console.log('Oii qual é sei nome?.')
process.stdin.once('data',function(data) {
    nome = data.toString().trim()
    console.log("então + nome + qual sua idade?")

    process.stdin.once('data', function(data){
        idade = toString(data.toString().trim())
        console.log("então + nome + quando é seu aniversário?")

        process.stdin.once('data', function(data){
            aniversario = data.toString(data.toString().trim())
            console.log("então + nome + quando você nasceu?")
            process.exit()
        })
    })
})

function processamento(nome) {
    if (nome>= Ana)
    console.log ('então qual sua idade?')
}
function processamento(idade) {
    if (idade>= 16)
    console.log ('entao quando é seu aniversário?')
}
function processamento(aniversario) {
    if (aniversario>= 16)
    console.log ('entao qual ano vc nasceu?')
    process.exit()
}