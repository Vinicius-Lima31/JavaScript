{
    {
        {
            { 
                var sera = 'Sera???'
                //console.log(sera) <<--Seria Imprimido sem problemas
            }
        }
    }
}
/*Outras Linguagens de Programação tem escopo, em outras 
quando tem blocos, essa variavel ficaria visivel apenas no bloco */
console.log(sera)
//Aqui tambem sera visivel a variavel var -sera- , estara visivel fora do bloco

function teste(){
    var locao = 123
    //console.log(local) é obvio que consiguira, ela esta dentro do escopo
}
teste()
//console.log(local) da Erro, porque a variavel so esta definida dentro da função
// criação de variavel com var, esta disponivel no código, porem nao esta em funções

//variaveis globais e variaveis locais

/*Evitar usar variavel global, porque uma variavel global tem acesso por todo o código
e isso faz com que essa variavel possa ser alterada diversas vezes, mesmo sem intenção */
