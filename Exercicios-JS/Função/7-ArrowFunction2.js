function Pessoa(){
    this.idade = 0

    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    },1000)
}

new Pessoa
//O this nesse contexto, foi escrito da função pessoa, chamamos de contexto lexico do local fisico do codigo fonte
//Independente do codigo ser chamado dentro de um temporizador, ira da certo, arrow function funciona, o this nao varia
