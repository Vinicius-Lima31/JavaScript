// "Rest" pega uma coisa e junta
// "Spread" pega e espalha

// Usando "Spread" em um Objeto
const funcionarios = {nome: "Maria", salario: 12348.99}
const clone = {ativo: true, ...funcionarios} // Adcionei um atributo chamado "ativo"
// Eu peguei todos atributos do Objeto "funcionarios" e espalhei dentro do objeto "clone"

console.log(clone) // Ira imprimir o Objeto, com atributo "ativo" e todos os atributos de "funcionarios"

// Usando "Spread" com um Array
const grupoA = ["João", "Pedro", "Glória"]
const grupoFinal = ["Maria", ...grupoA, "Rafaela"] // Adcionei "Maria" e "Rafaela"
// Peguei todos atributos do Array "grupoA" e espalhei no Objeto "grupoFinal"

console.log(grupoFinal)