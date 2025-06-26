/*Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
formarem uma data real (meses de 28–31 dias, ano bissexto para
fevereiro) e false caso contrário.*/

const prompt = require("prompt-sync")();

function ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0); //validação se é bissexto
}

function ehDataValida(dia, mes, ano) {
    if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
        return false;
    }

    const diasPorMes = [31, (ehBissexto(ano) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    return dia <= diasPorMes[mes - 1]
}

const dia = parseInt(prompt("Digite o dia: "))
const mes = parseInt(prompt("Digite o mês: "))
const ano = parseInt(prompt("Digite o ano: "))

const resultado = ehDataValida(dia, mes, ano);
console.log(`A data ${dia}/${mes}/${ano} é ${resultado ? "válido" : "inválida"}`)