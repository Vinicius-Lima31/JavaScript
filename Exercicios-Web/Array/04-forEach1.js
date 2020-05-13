const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, i) { // primeira recebe o atributo depois o indice
    console.log(`${i + 1}) ${nome}`) // caso eu queira usar o indice, primeiro eu boto o valor, depois o indice
})
// Ja que o indice começa de 0, eu botei + 1

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

/* A função forEach() recebe 3 parametros
 * 1° nome
 * 2° indice
 * 3° Array
 * 4° a diante, undefined
*/