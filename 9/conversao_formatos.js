/*Escreva duas funções:

○ paresParaObjeto(pares) recebe um array de pares [ [chave,
valor], ... ] e retorna o objeto equivalente.
○ objetoParaPares(obj) faz o inverso, retornando um array de
pares.*/

function paresParaObjeto(pares) {
    return pares.reduce((obj, [chave, valor]) => {
        obj[chave] = valor;
        return obj;
    }, {});
}

function objetoParaPares(obj) {
    return Object.entries(obj);
}


const pares = [
    ["nome", "Ana"],
    ["idade", 30],
    ["cidade", "São Paulo"]
];
const objeto = paresParaObjeto(pares);
console.log("Objeto:", objeto);



const paresConvertidos = objetoParaPares(objeto);
console.log("Pares:", paresConvertidos);