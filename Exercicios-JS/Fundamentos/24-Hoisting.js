console.log('a =', a) //undefined
var a = 2
console.log('a =', a) // 2
/*
É como se na pratica o código acontecesse isso:
var a
console.log('a =', a)
a = 2
console.log('a =', a)
*/

//console.log('b =', b)
let b = 3     // Com LET não funciona o Isamento, apenas com VAR
console.log('b =', b)