

const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
Array.prototype.flatMap = function (callback) {
    let notasFlat = []
    const notasDasTurmas = this.map(callback)
    for (const notas of notasDasTurmas) {
        notasFlat = notasFlat.concat(notas)
    }
    return notasFlat
}
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)