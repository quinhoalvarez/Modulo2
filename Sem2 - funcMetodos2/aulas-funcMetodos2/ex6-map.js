//map

const produtos = [
    { nome: 'arroz', preco: 500 },
    { nome: 'carne', preco: 3200 },
    { nome: 'biscoito', preco: 450 },
    { nome: 'banana', preco: 320 }
];

let desconto = 0.10

const arrayComDescontos = produtos.map((produto) => {
    return {
        nome: produto.nome,
        preco: produto.preco / 100,
        desconto: (produto.preco / 100) * desconto
    }
    // console.log(produto);
})

console.log(arrayComDescontos)