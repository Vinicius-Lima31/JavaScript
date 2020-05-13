// Um novo Recurso do ECMA, um novo tipo de "for"

for(let letra of "Cod3r") // ---> "of" <---
{
    console.log(letra) // Ele imprimi o valor
}

// Criar um Array
const assuntosEcma = ["Map", "Set", "Promise"]

// Usando "in"
for(let i in assuntosEcma) // ---> "in" <---
{
    console.log(i) // Imprimiu os indices
}

for(let assunto of assuntosEcma) // ---> "of" <---
{
    console.log(assunto) // Imprimiu os Valores
}

/*
    of ---> Retorna "Valores"
    in ---> Retorna "Indice/Chave"
*/

const assuntosMap = new Map
([
    ["Map", {abordado: true}],
    ["Set", {abordado: true}],
    ["Promise", {abordado: false}]
])

for(let assunto of assuntosMap) // ---> "of" <---
{
    console.log(assunto) // Imprimindo todos valores
}

for(let assunto of assuntosMap.keys()) // ---> "of" <---
{   //         Usando "keys()" para imprimir as "chaves"
    console.log(assunto)
}

for(let valor of assuntosMap.values()) // ---> "of" <---
{   //          Usando "values()" para imprimir "valores"
    console.log(valor)
}

// Usando "destruct" agora!

for(let [chave, valor] of assuntosMap.entries()) // ---> "of" <---
{ // Usando Destruct      "entries()" Um Arrray de Objetos
    console.log(chave, valor)
}

const s = new Set(["a", "b", "c"]) // um "Set" com esse Array

for(let letra of s) // ---> "of" <---
{
    console.log(letra) // Imprimir valor, ou seja, cada letra --->
    /*
        a
        b
        c
    */
}

/*
    Of ---> Eu possso usar em um Array, Strinng
    Se eu quiser acessar os valores de um Array,
    usando o "for of" é uma bom jeito de se fazer isso!
*/