const prod1 = {} /*Chaves indica criação de um objeto vázio
assim como conchetes [] indica array*/
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar Atributos com espaços
//Dentro de um objeto vazio temos nome e preço, criado dentro do prod1

console.log(prod1)
console.log(prod1.nome) //Imprimir so o nome
/*Imprimido: { nome: 'Celular Ultra Mega', preco: 4998.9
               'Desconto Legal': 0.4 }                                  */

const prod2 = {
    nome: 'Camisa Polo', //Necessario o uso de Virgula
    preco: 79.90
}

console.log(prod2)
//Necessario uso de Virgula
const loja = {
    Camisa: 'Botafogo FC',
    Preço: 278.00,
    Tamanho: 'G'
}

/*Apenas Adcionando coisas a mais*/
console.log(loja)
console.log(typeof loja)
console.log(loja.Camisa.replace('C', 'R'))
let desconto = 0.40
console.log(`Preço Original R$ ${loja.Preço}
Preço com Desconto R$ ${(loja.Preço * desconto).toFixed(0)}`)