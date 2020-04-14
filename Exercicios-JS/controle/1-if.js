function soBoaNoticia(nota) {
    if (nota >= 7) { // se a nota for maior ou igual a 7
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo (valor) {
    if(valor){
        console.log('É verdade ...' + valor)
    }
}

seForVerdadeEuFalo() // é passada undefined
seForVerdadeEuFalo(null) // false
seForVerdadeEuFalo('') // false
seForVerdadeEuFalo(0) // false
seForVerdadeEuFalo(-1) // É verdade... -1
seForVerdadeEuFalo(' ') // É verdade...
seForVerdadeEuFalo({}) // É verdade.. [objetc Objetc]
