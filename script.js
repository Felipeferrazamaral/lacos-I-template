// pratica guiada 1
// // Vamos criar um sistema em que a pessoa será solicitada a inserir vários números, um após o outro.


// Quando a pessoa digitar o número '0', devemos parar de solicitar novos inputs (entradas) e imprimir no console a soma de todos os números inseridos.

// Exemplo: A pessoa usuária colocou os números:  10, 3, 50, 7, 0 
// O resultado deve ser: 70

function somaNumerosInseridos() {
    let numero = Number(prompt(`Digite um numero:`))

    let soma = 0

    while(numero !== 0){
        soma = soma + numero
        numero = Number(prompt(`Digite outro numero:`))
            
    }

    console.log(`A soma dos numeros inseridos é: ${soma}`)
}

//somaNumerosInseridos()

// PRATICA GUIADA 2

// Vamos escrever um programa que recebe um número do usuário.
// Esse programa deve escrever os números de 0 até o valor que foi digitado pela pessoa.
// Para isso, vamos utilizar um laço for que roda por X vezes, onde X é o número digitado.

function imprimeNumerosAteNumeroEscolhido() {
    const numeroEscolhido = Number(prompt(`Digite um numero:`))


    for(let i = 0; i <= numeroEscolhido; i++) {
        console.log(i)

    }

}
//imprimeNumerosAteNumeroEscolhido()
// PRATICA GUIADA 3 
// FOR COM ARRAYS 
// Vamos criar um array com 7 números, e utilizar um for para percorrer os índices deste array, imprimindo no console a cada linha:
// “O elemento de índice ${indice} é ${numero[indice]}”


const numerosArray = [78, -643, 0, 37, 429, 10742, 24]

function imprimeMsgArray(array){
    console.log(array)


    for(let i = 0; i < array.length; i++){
        console.log(`O elemento de indice ${i} é ${array[i]}.`)

    }
}

//imprimeMsgArray(numerosArray)

// EXERCICIO FIXACAO 1

function permiteAdmin() {
    let tipoDeUsuario = prompt(`Digite o tipo de usuario,de acordo com a legenda a baixo: 
    "A" para adm
    "B" para usuario comun
    "C" para assinante`).toUpperCase()

    while(tipoDeUsuario !== 'A') {
        console.log(`Acesso Negado`)
        tipoDeUsuario = prompt(`Digite o tipo de usuario,de acordo com a legenda a baixo: 
        "A" para adm
        "B" para usuario comun
        "C" para assinante`).toUpperCase()
    }
}

console.log(`Boas vindas , admin!`)

//permiteAdmin()

// EXERCICIO FIXACAO 2

function calculaTabuadaDois() {
    for(let i = 1; i <= 10; i++){
        const resultado = 2 * i
        console.log(`2 x ${i} = ${resultado}`)
    }
}

//calculaTabuadaDois()

//EXERCICIO FIXACAO 3
function imprimeStringsCaixaAlta(array) {
    console.log(array)

    for(let i = 0; i < array.lenght; i++) {

        const palavraMaiuscula = array[i].toUpperCase()

        console.log(palavraMaiuscula)

    }
     console.log(`Saiu do laco!`)
}

const palavras = ['agua', 'fruta','telefone']
imprimeStringsCaixaAlta(palavras)