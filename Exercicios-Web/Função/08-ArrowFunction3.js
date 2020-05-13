let comparaComThis = function (param) {
    console.log(this === param) // vai retornar true ou false
    //this é estritamente igual ao parametro que sera dito?
}

comparaComThis(global) /* true
* Global é a mesma coisa que window como mostrado no Bowser */

const obj = {}
comparaComThis = comparaComThis.bind(obj) //Estou apontando a função para o obj, this do obj nao e igual do global
comparaComThis(global) // false, this do obj não é igual ao global
comparaComThis(obj) // true, this do obj é igual ao do obj

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
/* se eu fizer uma função normal aponta pro global
*  e se eu fizer uma função arrow não aponta pro global                                                                                                                                                                                                                                                                                                      */
comparaComThisArrow(module.exports) // ele é um module.exports

//Agora vou usar bind dentro de um function Arrow

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // Quem sera mais forte, bind ou Arrow Function? R: Arrow Function
//False, ela não vai mudar, vai continuar intacto, ele não vai apontar para objeto que tentei apontar

comparaComThisArrow(module.exports)

//o This no Arrow é associoado ao contexto no qual ele foi feito, sem variação nenhuma, mesmo eu forçando ele apontar, ele não ira fazer
