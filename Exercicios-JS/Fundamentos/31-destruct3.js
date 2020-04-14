//Da pra usar em uma função
function rand({ min = 0, max = 1000 }) //Nao tem um objeto, signifa que estou passando objeto na função
{//Aqui em cima estou usando operador destruct
    const valor = Math.random() * (max - min) + min // é pegado  um valor random (aleatorio)
    return Math.floor(valor)
}

console.log(rand({ max: 10, min: 35 })) // e aqui usado um objeto
const obj = { max: 50, min: 40 }
console.log(`\n${rand(obj)}`)
console.log(rand({min: 955})) // ja tem valor padrão
console.log(rand({}))/* navegando entre 0 e 1000                        
console.log(rand()) Aqui ocorreria um problema                                                                                                                                                                                                                                              */

//Feito em um comentario pelo professor
console.log('\n')
const jogador = {
    nome: "Kaz",
    classe: "Bárbaro",
    raca: "Minotauro",
    habilidade: {
        nome: "Furia",
        descricao: "Ao entrar em fúria o jogador recebe apenas metado do dano de inimigos",
        dano: {
            fisico: 2,
            magico: 0
        }
    }
}

function getHabilidade({habilidade}) {// <--

    function getDano({dano}) {
        const {fisico, magico} = dano
        return `Dano físico: +${fisico}\nDano mágico: +${magico}`
    }
    console.log(habilidade.nome);       // <<<<<----  estão dentro da função
    console.log(habilidade.descricao);  // <<<<<----  estão dentro da função
    console.log(getDano(habilidade));   // <<<<<----  estão dentro da função
} //< ---

getHabilidade(jogador)