// Primeiro vou criar um Pequeno Objeto para representar uma sequencia
// Para eu pegar os "id" dos Objetos que eu vou persistir
const requence = 
{
    _id: 1,
    get id() { return this._id ++ } // Vai sempre retornar o Próximo valor de ID

    // Eu usei método do "get", então quando eu for chamar o "id" eu não preciso chamar a função e simplesmente uso aquele conceito de propriedade
    // Chamo o Atributo e internamente ele vai chamar a função
}

const produtos = {}
/* 
    Esse Objeto tera como chave cada um dos id's de cada um do produto
    Então esse Objeto, como uma coleção de "chaves" e "valores"
    A "chave" vai ser o ID do produto
    O "valor" vai o próprio Objeto
*/


function salvarProduto(produto)
{
    if(!produto.id) produto.id = sequence.id // se o id de produto não estiver setado, eu vou fazer -> produto.id = sequence.id
    produtos[produto.id] = produto // Objeto produto que foi criado na linha 12, a chave vai ser --> produto.id <--
    return produto // ele vai entrar aqui e retornar com "ID"
}

// Próxima função que eu criar, vai ser pra pegar objeto por ID
function getProduto(id)
{
    return produtos[id] || {} // Vai retornar produtos[id] ou um Objeto Vazio

    /*
        É necessário que seja com notação colchete, pois você está parametrizando 
        o acesso ao atributo. Ou seja, você não definiu o índice do atributo a ser acessado,
        você quer que o índice seja lido a partir do valor de id, e esse valor.
        Sempre que você quer recuperar de uma variável a chave ou índice de um atributo,
        é necessário usar essa notação. A notação ponto, por outro lado,
        é quando você já sabe essa chave ou índice.
    */
}

// Função para retornar todos os valores dentro de Produto
function getProdutos()
{
    Object.values(produtos) // Vou Simplesmente Retornar os valores
    // vai retonar todos os valores que estão dentro de produtos
    // Chave é o ID, e o valor são os objetos
}

// Essas funções estão visiveis apenas dentro desse modulo do Node, eu preciso exportar elas

module.exports = {salvarProduto, getProduto, getProdutos} // Crio um objeto que vai ter os métodos
// Então essas 3 funções estão visiveis para fora do Arquivo
