require("./Global") // <-- Importei o "Global" nem passei pra nenhuma variavel

console.log(MinhaApp.saudacao()) // --> "Estou em todos os Lugares"
console.log(global.MinhaApp.saudacao()) // <-- eu até podia botar o "global" mas não sou obrigado 

MinhaApp.nome = "Eita" // <-- algo global que pode ser mudado em qualquer lugar!

console.log(MinhaApp.nome) // Percebe que foi mudado --> "Eita"
// Foi sobrescrito, ficou passivel de ser modificado...
// Uma alternativa que tem para evitar esse tipo de coisa é freezando o Objeto
// Usando: "Object.freeze"

MinhaApp2.nome2 = "Nao vai funcionar, Porque eu congelei ele no global"
console.log(MinhaApp2.nome2) // --> Não foi alterado, porque esta congelado, agora não é possivel mexer nele de outro arquivo
console.log(MinhaApp2.saudacao2())

// o Padrão é a gente usar Modulos, para evitar esse tipo de coisa!