function Pessoa() {
    this.idade = 0

    setInterval(function () { /*setInterval chama função em um intervalo, passei uma função como parametro no setInterval
        setInterval chama um intervalo */
        this.idade++ // Nesse caso o this.idade não aponta para objeto 'pessoa'
        console.log(this.idade)
        console.log(this) // pessoa { idade : n...}
    }.bind(this), 1000) // passei 1000, que se refere a 1 segundo
} // passei this, para ele amarrar o this do objeto

new Pessoa