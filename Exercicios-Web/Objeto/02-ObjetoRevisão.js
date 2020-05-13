// Coleção Dinamica de pares chave/valor
const produto = new Object // é uma forma de criar objeto
produto.nome = 'Cadeira'    // Criando propriedades no Objeto
produto['Marca do Produto'] = 'Generica' // é possivel, mais não é bom usar
produto.Preço = 220

console.log(produto)
delete produto.Preço    // delete , excluindo uma propriedade do produto
delete produto['Marca do Produto']  // Se eu usar string para declarar, eu teria que usar tambem para deletar
console.log(produto)

console.log()

const carro = { // Objeto por Objeto
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereço: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    }, // usaar virgula em objeto, e uma regra
    condutores: [{ // Um Array de objetos
        nome: 'Junior',
        idade: 19
    }, {    // virugla após cada array
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        //...
    }
} // Só pra mostrar que objeto pode ter isso tudo
// Object.freeze(carro) Não seria modificado nada
carro.proprietario.endereço.numero = 1000 // posso acessar assim, e alterar
carro['proprietario']['endereço']['logradouro'] = 'AV Gigante' // ou assim
console.log(carro)
console.log()
delete carro.condutores
delete carro.proprietario.endereço
delete carro.calcularValorSeguro
console.log(carro)
console.log('Undefined = ', carro.condutores) // undefined porque eu ja deletei
//console.log(carro.condutores.length) aqui aconteceria o erro