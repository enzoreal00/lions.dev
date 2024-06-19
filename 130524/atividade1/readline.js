const readline = require('readline')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})


exibirMenu()

function exibirMenu() {
    console.log(`
    Menu:
    1. Rocket League
    2. Fortnite
    3. Minecraft
    4. Brawlhalla
    `)
    rl.question('Escolha uma opção: ', (opcao) => {
    switch (opcao) {
        case '1': ['Rocket League']
            break
        case '2': ['Fortnite']
            break
        case '3': ['Minecraft']
            break
        case '4': ['Brawlhalla']
            break
    rl.close()
    break
    default:
    console.log('Boa escolha!')
    exibirMenu()
    break
    }
    })
    }

     function exibitMenu() {
        console.log(`com as opcoes`)
        rl.question (`para guardar a opcao escolhida`) 
               switch (opcao) {
                   case 1:
                       funcao1()
                       break
                   case 2:
                       funcao2()
                       break
                   case 3:
                       rl.close()
                       break
                       default:
        (`opcao invalida`)
        exibirMenu()
        break
        }
        }
        

        function ca() {
            rl.question('Digite o nome do personagem: ', (nome) => {
            rl.question('Digite o universo do personagem: ', (universo) => {
            rl.question('Digite o papel do personagem: ', (papel) => {
            funcionarios.push({ nome, cargo, salario: parseFloat(poder) })
            console.log('Personagem caracterizado com sucesso!')
            exibirMenu()
            })
            })
            })
            }

            function ca() {
                rl.question('Pergunta 1: ', (resposta1) => {
                rl.question('Pergunta 2: ', (resposta2) => {
                rl.question('Pergunta 3: ', (resposta3) => {
                personagens.push({
                propriedade1: resposta1,
                propriedade2: resposta2,
                propriedade3: resposta3
                })
                console.log('Caracterizado com sucesso!')
                exibirMenu()
                })
                })
                })
                }

                function remover() {
                    if (vetor.length == 0) {
                    console.log('Nada caracterizado.')
                    exibirMenu()
                    } else {
                    console.log('Lista de personagens')
                    vetor.forEach((personagem, index) => {
                    console.log(`${index + 1}. ${personagem}`)
                    })
                    rl.question('liste o nome do personagem que deseja remover: '), (nome) => {
                    if (nome > 0 && nome <= vetor.length) {
                    vetor.splice(nome - 1, 1)
                    console.log('Personagem removido com sucesso!')
                    exibirMenu()
                    } else {
                    console.log('Nome inválido, tente novamente.')
                    exibirMenu()
                    }
                    }
                    }
                    }