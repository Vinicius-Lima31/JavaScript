console.log(this === global) // False! Porque this não aponta para global e sim para "module.exports"
console.log(this === module.exports) // True! Explicado acima
console.log(this === module) // False! Porque "this" é um objeto referente a "module.exports"

console.log(this === exports) // True! Explicado na 1° Linha, this aponta para "module.exports"

function logThis()
{
    console.log("Dentro de uma função...")
    console.log(this === exports)           // False! Porque "this" dentro de uma função não aponta para "exports"
    console.log(this === module.exports)    // False! Porque "this" dentro de uma função não aponta para "module.exports"
    console.log(this === global)            // True! "this" dentro de um função aponta para global, porém fora da função aponta para "module.exports"

    // this.perigo = "..." // Isso aqui estou fazendo dentro do "global"
}

// this.perigo = "..." // Isso aqui estou fazendo dentro do "module.exports"

logThis() 
// Porém fora da função ja aponta
