/*Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array.*/

const prompt = require("prompt-sync")();

const frase = prompt("Digite uma frase: ")
const palavras = frase.split(" ") //quebrar a frase
const unicas = [];

for (let i = 0; i < palavras.length; i++) {
    let palavraAtual = palavras[i]
    let jaExiste = false
        //validação se a palavra já está no array
    for (let j = 0; j < unicas.length; j++) {
        if (palavraAtual === unicas[j]) {
            jaExiste = true
            break
        }
    }
    // adiciona no array se não estiver no array 
    if (!jaExiste) {
        unicas.push(palavraAtual);
    }
}

console.log("Palavras únicas:", unicas)