console.log(soma(3, 4))         //Aqui funciona

//function declaration
function soma(x, y) {
    return x + y                //JS primeiro carrega suas funções depois carrega os códigos
}

console.log(/*sub(3, 4)*/)      //Se eu fizer com function expression, não funciona
// function expression (function anonim)
const sub = function () {
    return x - y
}

console.log(/*mult(3,4)*/)          //Não funciona também
// named function expression (mistura)
const mult = function mult(x, y) {
    return x * y                //pouco usado
}