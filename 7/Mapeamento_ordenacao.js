/*Dado um array produtos = [{ nome, preco }, ...], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort.*/


const produtos = [
    { nome: "Mouse", preco: 90 },
    { nome: "Teclado", preco: 150 },
    { nome: "Monitor", preco: 800 },
    { nome: "Cabo HDMI", preco: 30 }
];

// Função que retorna os nomes dos produtos ordenados por preço crescente
function nomesOrdenadosPorPreco(produtos) {
    return produtos
        .slice() // cria uma cópia para não modificar o array original
        .sort((a, b) => a.preco - b.preco) // ordena os produtos pelo preço (crescente)
        .map(produto => produto.nome); // extrai apenas os nomes
}

// Testando a função
const nomesOrdenados = nomesOrdenadosPorPreco(produtos);
console.log(nomesOrdenados);