const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.52 }'
]

// Retornar um Array apenas com os preços

const json = js => JSON.parse(js)
const nvArray = js => js.preco // o parametro seria o array carrinho


const array = carrinho.map(json).map(nvArray)
console.log(array)