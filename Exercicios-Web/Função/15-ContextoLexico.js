const valor = 'Global' 

function minhaFuncao () {
    console.log(valor) // Eu não tenho uma variavel com esse mesmo nome na função, então ele vai procurar no escopo Maior!
}
minhaFuncao() //Sera imprimido global, nada de mais, pois é uma variavel global

function exec () { 
    const valor = 'Local'
    minhaFuncao()
}

//O que seria imprimido ? Se eu botasse a linha 9: "const valor = 'local' entre a linha 3 e 4, ele imprimiria Local
exec()
/*Minha função no Caso vai achar valor Global, porque uma função quando é declarada em JS
ela não tem apenas seu conteúdo interno, o seu nome, parametros que recebe, ela tambem tem consiencia
do local que foi que ela foi definida, a função carrega consigo essa informação do contexto, em qual ela foi declarada
Contexto Léxico é muito importante para uma função, ela carrega consigo esse contexto em qual foi declarada

NÃO NO LOCAL QUE FOI DE EXECUÇÃO DA FUNÇÃO, MAIS SIM NO LOCAL QUE FOI DEFINIDA*/