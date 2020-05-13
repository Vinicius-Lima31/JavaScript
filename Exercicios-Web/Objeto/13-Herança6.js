function Aula(nome, videoID) 
{
    this.nome = nome
    this.VideoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando operador new
function novo(f, ...params) { // ... recebe um monte de paramentros e concatena tudo
    const obj = {}
    obj.__proto__ = f.prototype // associei o prototipo desse obj, para prototipo de funcao
    f.apply(obj, params) // ele vai executar função f passando como parametros obj e parametros
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)