Array.prototype.forEach2 = function (Callback) {
    for (let i = 0; i < this.length; i++) {
        Callback(this[i], i, this)
    }
}


const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function (nome, i) { // primeira recebe o atributo depois o indice
    console.log(`${i + 1}) ${nome}`) // caso eu queira usar o indice, primeiro eu boto o valor, depois o indice
})