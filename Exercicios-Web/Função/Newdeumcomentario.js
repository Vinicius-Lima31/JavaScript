class Casa {
    constructor(quartos, banheiros) {
        this.quartos = quartos
        this.banheiros = banheiros
    }
 
    ApresentarCasa() {
        console.log(`Essa casa possui ${this.quartos} quartos e ${this.banheiros} banheiros!`);
    }
}
 
const casa1 = new Casa(3, 2)
casa1.ApresentarCasa()
 
const mansao = new Casa(10, 10)
mansao.ApresentarCasa()

console.log('\n')

function tratarErroELancar(erro){
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}
 
function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(erro){
        tratarErroELancar(erro)
    } finally{
        console.log('Final')
    }
}
 
 
const obj = { nome: 'Roberto' }
try{
    imprimirNomeGritado(obj)
}catch(erro){
    console.log(erro)
}
 
const oi = function(x, n){
    try{
        let op = Math.pow(x,1)
        return op
    } catch{
        throw 'ERRO'
    }
}
 
console.log(oi(2,2))