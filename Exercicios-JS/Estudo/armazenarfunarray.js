function a() {
    console.log('oi')
}
function b() {
    console.log('td bem?')
}
function erro(e) {
    throw 'Variavel não declarada'
}

const array = [a, b, 'Tudo e você?', () => console.log('Tou bem Obrigado!')]
array[0]()
array[1]()
console.log(array[2])
array[3]()

try {
    console.log('ola', joao)
} catch (e) {
    erro(e)
}