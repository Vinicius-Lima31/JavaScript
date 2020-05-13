function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // ou exclusivo
    const comprarTv32 = trabalho1 != trabalho2 // operador de diferente tambem representa 'ou' exclusivo
    const manterSaudavel = !comprarSorvete //operador unario

    /* return {
         comprarSorvete: comprarSorvete,
         comprarTv50: comprarTv50,
         comprarTv32: comprarTv32,
         manterSaudavel: manterSaudavel
 
         um objeto é chave e valor, graças ao novo recurso do ES2015, nao precisa mais declarar, faz automaticamente
     }   Seria mesma coisa do que fazer a que eu vou fazer em baixo
     */

    //chave e valor tbm, é apenas um novo recurso
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log('\n', compras(true, false))
console.log('\n', compras(false, true))
console.log('\n', compras(false, false))

var obj = {}
obj = compras(true, true)
console.log('\nPassando Objeto para uma variavel objeto: \n', obj)