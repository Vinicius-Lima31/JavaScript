const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
/*TemplatString posso sim quebrar linha, ele vai considerar todas linhas
espaçoes em brancos etc*/
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)
/* Não é aspas simples, só pra deixar claro, é o uso de crase
com template é concatenado tudo, espaços, quebra de linhas etc...
Devemos usar <<--- ${} --->>                                                            */
console.log('\n')
console.log(`1 + 1 = ${1 + 1}`) //Foi concatenado ' 1 + 1' com resultado de 1 + 1
console.log(`9 x 9 = ${9 * 9}`)

const up = texto => texto.toUpperCase() //Sobre Função apenas exemplo, nada que se preocupar agora..
console.log(`Ei... ${up('cuidado')} !`)
let name = `Vinícius , ${nome}`
console.log(name)
console.log(typeof name)
console.log(name.split(','))