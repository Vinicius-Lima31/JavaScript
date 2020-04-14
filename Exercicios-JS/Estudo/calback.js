const marcas = ['Nike', 'Adidas', 'Toppen', 'Puma']
function imprimir(marca) {
    console.log(`. ${marca}`)
}
marcas.forEach(imprimir)

const money = [1500, 3900, 80000, 67500, 4999, 100000, 500, 18000, 9500]

const array1 = money.filter((money) => money < 5000) //receber parametro
const array2 = money.filter((money) => money>5000 && money<20000)
const array3 = money.filter((money) => money>20000)
console.log(`Salario Minimo = ${array1}`)
console.log(`Salario Médio = ${array2}`)
console.log(`Salario Alto = ${array3}`)

money.forEach(imprimir)