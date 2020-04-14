//JSON muito usado em comunicação de sistema, e um formato de textual
// É Um formato textual, é um formato de dados, não é passada função

const obj = { a: 1, b: 2, c: 3, soma() { return this.a + this.b + this.c } }
console.log(obj.soma())
console.log(JSON.stringify(obj)) // nota que a função foi excluida


//vou pegar um JSON e transformar em um objeto
//console.log(JSON.parse("{a: 1, b: 2, c: 3}")) deu problema aqui
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) o nome de um json de um atributo tem que ser aspas duplas
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1.8, "b": "string", "c": true, "d": {}, "e": [] }'))
//string em aspas duplas, numeros, boleanos nao precisa de aspas
