const sequence = 
{
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) 
{
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) 
{
    return produtos[id] || {}
}

function getProdutos() 
{
    return Object.values(produtos)
}

function excluirProduto(id) 
{
    const produto = produtos[id]
    delete produtos[id] // Aqui estou Deletando o Objeto cujo o "ID"
    return produto // E retornando o produto, aqui poderia retornar qualquer coisa, mas botei "produto" pra não ficar vazio
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto}