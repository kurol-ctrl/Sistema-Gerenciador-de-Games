
const prompt = require("prompt-sync")()   // pra entrada de dados

let time = [] //arrays = listas
let continuar = true


// ---------------- FUNÇÃO MENU -------------------
function motrarMenu() {
    //uma função guarda informacoes para serem usadas repetidas vezes sem precisar criar novos codigos, e organizam o codigo por blocos (muito bom)
    console.log("\n\n_________________________________\n")
    console.log("____________Bem vindo ao Sistema de Gamers_____________")
    console.log("1 - Cadastrar")
    console.log("2 - Deletar")
    console.log("3 - Mostrar Equipe")
    console.log("4 - Calculo da Média da equipe")
    console.log("5 - Função de Buscar")
    console.log("6 - Atualizar Pontos")
    console.log("7 - Sair")
    console.log("\n") //quebra de linha
}


// ---------------- FUNÇÃO MOSTRAR EQUIPE -------------------
function mostraEquipe() {
    if(time.length === 0) {
        return
        //verifica se o time ta vazio
    }

    for(let i = 0; i < time.length; i++) {
        //serve para repetir um bloco de código várias vezes de forma automática (estrutura de repetição ou laço): for(comeca no numero 0; condiaçao de repetiçao; soma +1 ao valor de i a cada repeticao (para avancar uma casa) )

        let Jogador = time[i]; //???
        console.log(
            (i+1) + ". " + 
            Jogador.nome + 
            "| Função:" + 
            Jogador.funcao + 
            "| Pontuação: " + 
            Jogador.pontuacao)
 
    }
}


// ---------------- FUNÇÃO CADASTRAR JOGADOR -------------------
function cadastrarJogador() {
    // criando um objeto = {x,y,z} = guarda informações de forma organizada, com nome e valor
    let Jogador = {
        nome: prompt("Digite o nome do jogador: "),
        funcao: prompt("Digite a função do jogador: "),
        pontuacao: Number(prompt("Digite sua pontuação: ")) //transforma a pontuacao em numero
    }


    if(isNaN(Jogador.pontuacao)) {
        console.log("Pontução inválida!")
        //isNan = verifica se nao é um numero
        return //?
    }

        time.push(Jogador) //[arrays].push = adciona informações na lista
        console.log("Usuário " + Jogador.nome + " foi cadastrado com sucesso!")
    



}


// ---------------- FUNÇÃO DELETAR JOGADOR -------------------
function deletarJogador() {

    if(time.length === 0) { //[array].length = verifica o tamanho da lista, se for vazio, reinicia o programa
    console.log("Nenhum jogador cadastrado")
    return //pra retornar ao ponto inicial
    }

    let nomeDeletado = prompt("Digite o nome a ser deletado: ")
    let indexDeletado = -1

    for (let i = 0; i<time.length; i++) {

        if(time[i].nome === nomeDeletado){
            indexDeletado = i
            break
        }
    }
    

    if (indexDeletado === -1) {     //verifica se o usuario ta cadastrado, se não estiver, retorna a mensagem de erro
        console.log("Jogador nao encontrado")
        return
    }

    time.splice(indexDeletado, 1) //deleta uma informacao da lista, [arrays].splice = deleta uma informação da lista, o primeiro parametro é a posição e o segundo é a quantidade de elementos a serem deletados
    console.log("Jogador deletado com sucesso!")
    console.log("_________________________________")
}


// ---------------- FUNÇÃO CALCULAR MÉDIA -------------------
function calculoMedia() {
    if (time.length === 0){
    console.log("Nenhum jogador cadastrado")
    return
    }

    let totalPontos = 0
    for (let i=0; i<time.length; i++) {
        totalPontos = totalPontos + time[i].pontuacao
    }

    let mediaPontos = totalPontos / time.length
    console.log("O time tem a pontuação média de: " + mediaPontos)

}


// ---------------- FUNÇÃO BUSCAR JOGADOR -------------------
function buscarJogador(nomeDesejado) { 

    console.log("Buscando por: " + nomeDesejado + "..."); 

    let encontrou = false; // Começamos assumindo que não encontramos ninguém 

    // O loop passa por todas as gavetas (posições) do nosso Array 

    for (let i = 0; i < time.length; i++) { 

    let jogadorAtual = time[i]; // Pegamos a ficha atual para ler 

    // Comparamos o nome da ficha com o nome procurado 

    if (jogadorAtual.nome === nomeDesejado) { 

        console.log("JOGADOR ENCONTRADO!");

    console.log("Nome: " + jogadorAtual.nome + " | Pontos: " + jogadorAtual.pontuacao); 

    encontrou = true; // Mudamos o status! 

    break; // Já achamos quem queríamos, podemos parar o loop 
    } } 

    // Se o loop terminar e a variável 'encontrou' continuar falsa... 
    if (encontrou === false) { 
    console.log("O jogador " + nomeDesejado + " não faz parte da nossa equipe.")
    } } 


// ---------------- FUNÇÃO ATUALIZAR PONTUAÇÃO -------------------
function atualizarPontuacao() {
    let atualizarNome = prompt ("Qual nome do jogador que você quer atualizar? ")
    for (let i = 0; i < time.length; i++) {
        let Jogador = time[i]
        if(time[i].nome === atualizarNome) {
            let pontosNovos = Number(prompt("Quantos pontos você quer adicionar? "))
            Jogador.pontuacao = Jogador.pontuacao + pontosNovos
            console.log("A nova pontuação do jogador(a) " + Jogador.nome + " é: " + Jogador.pontuacao)
        }
        else {
            console.log ("Jogador não encontrado!")
        }
    }


}


// ---------------- FUNÇÃO WHILE -------------------
// while = ciclo de repeticao
// vai chamar as funcoes
while(continuar === true) {
    motrarMenu()
    let opcao = prompt("Digite sua opção:")

    if(opcao === "1") {
        cadastrarJogador()
    }

    else if (opcao === "2"){
        deletarJogador()
    }

    else if (opcao === "3") {
        mostraEquipe()
    }

    else if (opcao === "4") {
        calculoMedia()
    }

    else if (opcao === "5") {
        let nomeDesejado = prompt("Digite o nome do jogador que deseja buscar: ")
        buscarJogador(nomeDesejado)
    }

    else if (opcao === "6") {
        atualizarPontuacao()
    }

    else if (opcao === "7") {
        continuar = false
    }

    else {
        console.log("Opção inválida, digite outra opção...")
    }
}


