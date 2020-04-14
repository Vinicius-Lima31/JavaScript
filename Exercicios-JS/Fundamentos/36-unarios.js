let num1 = 1
let num2 = 2

num1++  // é acrescentado 1 
console.log(num1) // 2
--num1 // é subtraido 1
console.log(num1) // 1
/* --num1 tem precedendia do que num1++ ou num1-- */

console.log(++num1 === num2--) // true
/* vai dar verdadeiro porque num1 sera acrescentado 1 logo de cara
num2 só sera subtraido 1 depois que for comparado
só depois da comparação que sera decrementado num2*/
console.log(num1 === num2)