const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os Alunos são Bolsistas ?
// Desafio 2: Algum aluno é Bolsistas ?

const Bol1 = alunos.map(e => e.bolsista).reduce((Ac, At) => Ac && At)
const Bol2 = alunos.map(e => e.bolsista).reduce((Ac, At) => Ac || At)

if (Bol1 === false)
    console.log('Todos os Alunos não são bolsistas !')
else
    console.log('Todos os Alunos são Bolsistas !')

if (Bol2)
    console.log('Sim algum aluno é Bolsista !')
else
    console.log('Não tem aluno Bolsista !')