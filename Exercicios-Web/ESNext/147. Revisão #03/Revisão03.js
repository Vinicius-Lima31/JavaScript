/* 
    ES8: Object.values  --> Retorna um Array com valores de um Objeto
         Object.entries --> Retorna um Array de Objetos
*/

const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj)) // --> [1, 2, 3]
console.log(Object.entries(obj)) // --> [['a', 1], ['b', 2], ['c', 3]]

// Melhorias na notação Literal
const nome = "Carla"
const pessoa = 
{
    // São as mesmas coisas
    nome, // --> nome: nome 
    ola() // --> function ola()
    {
        return "Oi Gente!"
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class animal{}
class cachorro extends animal // "extends" -> herança
{ // "Cachorro! subclasse de "animal"
    falar()
    {
        return "Au Au"
    }
}

console.log(new cachorro().falar()) // -> Au Au