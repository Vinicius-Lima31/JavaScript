// par Nome/Valor
const saudacao = 'Opa' //contexto Léxico 1

function exec() {
    const saudacao = 'Falaaa' // Contexto Léxico 2
    // const saudacao = 'Falaa' se nao achar aqui, ele pegara da 2 linha
    return saudacao
}
/* Como estão em contexto diferentes não ocorrera Conflitos */

/* const saudacao = 'Epa!!' 
Daria erro, porque ja declarado const saudacao nesse léxico
*/

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Vinícius',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)