/*Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.*/

const prompt = require("prompt-sync")();

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0
let palpite

console.log("Tente adivinhar o número entre 1 e 100!");

while (palpite !== numeroAleatorio) {
    palpite = parseInt(prompt("Digite seu palpite: "))
    tentativas++

    if (palpite < numeroAleatorio) {
        console.log("Mais alto!");
    } else if (palpite > numeroAleatorio) {
        console.log("Mais baixo!")
    } else if (palpite === numeroAleatorio) {
        console.log(`Parabéns! Voce Acertou em ${tentativas} tentativa(s).`)
    } else {
        console.log("Entrada inválida. Digite um número.")
    }
}