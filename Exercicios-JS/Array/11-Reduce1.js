// Uma função para transformar um Array em um unico elemento
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))//                      somatorio    proximo

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) 
{
    console.log(acumulador, atual) // Ele acumula cada nota
    return acumulador + atual
}, 10) // é possivel passar valor inicial após a função, significa que o primeiro elemento é o 10

// Nessa função acima, tem o "acumulador" que ja começou com valor 10
// e o "atual" vai sendo acrescentado, ele percorre por tudo

console.log(resultado) // somou todas notas dos alunos

console.log(resultado / ((alunos.map(a => a.nota).length) + 1))