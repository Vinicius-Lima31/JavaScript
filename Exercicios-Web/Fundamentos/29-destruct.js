//Novo recurso do ES2015 

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
/*Quando trabalho em um ambiente de objeto usa chaves {}
  Quando trabalha em um ambiente de Array usa conchetes []*/

//Quero extrair a variavel nome e idade, sem usar notação de ponto

const { nome, idade } = pessoa //Sempre abrir a chaves depois do const, essa chaves não é pra criar objeto, ele represente destructuring
//O que eu estou dizendo aqui, é:
// tire o atributo nome e 'idade' do 'objeto' -- 'pessoa'
//Agora temos 2 variaveis pra trabalhar, nome e idade, apartir do operador destructinr
console.log(nome, idade)
//e se eu quiser nome da variavel? simples

const { nome: n, idade: i } = pessoa
// criando variavel com nome n, e idade com nome i
console.log(n, i)
//Tirando algo que não existe

const { sobrenome, bemHumarado = true } = pessoa //atribuindo valor padrão
console.log(sobrenome, bemHumarado)
// se eu quiser acessar os atributos de logradouro e numero

const { endereço: { logradouro, numero, cep } } = pessoa
// ele não vai criar variavel endereço, pq tou usando {} dps
//Ele vai criar logradouro, numero e cep
//const {endereço} = pessoa // se fosse assim ele criaria um chamada endereço
console.log(logradouro, numero, cep)

//const {conta: {ag, num}} = pessoa 
//console.log(ag,num)
//Daria erro, tentando acessar algo que não existe

const { nome: x, idade: y } = pessoa
console.log(`Nome: ${x} Beatriz \nIdade = ${y+2}`)