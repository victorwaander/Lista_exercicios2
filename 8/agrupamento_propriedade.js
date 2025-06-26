/*Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total.*/

const vendas = [
    { cliente: "Ana", total: 100 },
    { cliente: "João", total: 200 },
    { cliente: "Ana", total: 150 },
    { cliente: "Carlos", total: 300 }
];

const totaisPorCliente = vendas.reduce((acumulador, venda) => {
    const { cliente, total } = venda;

    // Se o cliente já existe no acumulador, soma
    if (acumulador[cliente]) {
        acumulador[cliente] += total;
    } else {

        acumulador[cliente] = total;
    }

    return acumulador;
}, {});

console.log(totaisPorCliente);