//Operadores relacionais, sempre retornam verdadeiro ou falso
// 3 > 2 , 3 é maior que 2 ? é sim ou não, nao tem 3 opção
console.log('01)', '1' == 1) // operador de igualdade
console.log('02)', '1' === 1) // igual igual igual
console.log('03)', '3' != 3) // é diferente
console.log('04)', '3' !== 3) //olha com extremidade

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 == d2) // dara false, porque ele compara o endereço de memoria
console.log('10)', d1 === d2) // daria falsa pq ele pega referencia e nao valor

console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)//igual
console.log('13)', undefined === null)//estritamente igual