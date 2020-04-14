const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //Indice 4 não existe, são de 0 ate 3 -- undefined

valores[4] = 10 //Aumento o Array, posição 4 está adcionado valor 10
console.log(valores)//Mostra Array por completo~

console.log(valores.length)//Mostra quantos indices tem no Array

valores.push({ id: 3 }, false, null, 'teste') //valores.push adciona mais elementos no vetor

console.log(valores.pop()) //Imprime apenas o ultimo valor
delete valores[0] // deleta, exclui um valor da variavel
console.log(valores)

console.log(valores) //Imprimindo todos elementos no vetor
console.log(typeof valores)
let array = [1, 2, 3, 4, 5]
array.push(6, 7, 8, 9, 10)

/*Simples teste que fiz aqui em baixo, usei array pra colocar novos valores*/
console.log(array[0], array[1], array[2], array[3], array[4], array[5], array[6], array[7], valores.length, array[9])
