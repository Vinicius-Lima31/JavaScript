//Tem que sempre prestar atenção no [] ou {} na posição para saber se esta usando um array ou objeto ou destruturando
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)
const [, [, nota]] = [[, 8, 8], [9, 6, 8]] // so um exemplo
// ignora primeira array, pula pro segundo array, ignora o primeiro elemento do segundo array
console.log(`\n${nota}`)

const x = [1, 2, 3, 4, 5]
const [x1, x2, x3, x4, , x5] = x
console.log('Array: ', x)
console.log(x1, x2, x3, x4, x5)

/*Temos sempre que identificar se é objeto array ou destruturando
*/
console.log('\n')
const array = []
array.push(10,9,8,7)
const [a1,a2,a3,a4] = array
console.log(a1,a2,a3,a4)