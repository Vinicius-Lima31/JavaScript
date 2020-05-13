// Forma de concatenar varios Array
const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos)  // Ele simplesmente concatena tudo, não é mexido no array original
console.log(todos, filhas, filhos)  // Simplesmente junta todos
console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]))

// Ele tirou apenas 1 colchentes do array, no caso [[6,7]] é uma Matriz