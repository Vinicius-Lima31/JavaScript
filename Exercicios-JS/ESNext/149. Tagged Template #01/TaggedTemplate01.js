// Não é muito usado esse tipo de coisaa

// Taggged templalte Processa o "Template String" dentro de uma função

function tag(partes, ...valores)
{
    console.log(partes)
    console.log(valores)
    return `Outra String`
}

const aluno = "Gui"
const situacao = "Aprovado"
console.log(tag`${aluno} está ${situacao}`)
// Percebe que eu usei o "tag" significa que estou passando uma "template String" como "parametros" de uma "função"

