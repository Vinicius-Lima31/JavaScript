//Tem tudo haver com função, Callback quer dizer = "chamar de volta"

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

imprimir('Oi', 2) // = 3.Oi
fabricantes.forEach(imprimir) /*forEach sera passado alguma coisa para alguma função
No caso sera passado o Array 'fabricantes' para função 'imprimir' que passamos como paramentros na função forEach() */
//Para cada elementro que for encontrado no Array ele sera chamado a função, para cada elemento encontrado, por isso Callback
console.log('\n')

fabricantes.forEach(a => console.log(a)) //Imprimiu certinho
//Callback é passar uma função, e essa função sera chamada quando esse evento acontecer
//o Evento é um loop, quando encontra um elemento ele chama o callback a função e tals

const pc = ['Kabum', 'Pichau Info', 'Terabyte', 'ChipArt']

pc.forEach((marca, number) => console.log(`${number + 1} - ${marca}`))
console.log(typeof fabricantes)

/* Sintaxe
            fabricantes.forEach(function)                   */