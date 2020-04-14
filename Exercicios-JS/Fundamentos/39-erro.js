function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try { //quer dizer tentar
        console.log(obj.name.toUpperCase() + '!!!') // toUpperCase transformando em maiusculas
    } catch (ex) {
        tratarErroELancar(ex)
    } finally {
        console.log('final') // ele chama o finally de qualquer jeito, mesmo tendo erro ou não
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj) /* ocorreria o erro
"TypeError: Cannot read property 'toUpperCase' of undefined", dizendo que nao tem como transformar undefined em maiusculas*/

/*try ele ira tentar procurar algum erro, caso tenha, ira para seguinte
catch que sera algo a se fazer, ele so ira para catch caso o try encontre algum erro
associado, e throw para escrever alguma coisa, ou informar */

const oi = function (x,n){
    try{
    let op = Math.pow(x,l) //procurar erro o try
    return op
    }catch{ // caso ache o erro no tyr, ele vira para ca
        throw 'ERROR 404 NOT FOUND' 
        // imprimir isso
    }
}
console.log(oi(2,2))