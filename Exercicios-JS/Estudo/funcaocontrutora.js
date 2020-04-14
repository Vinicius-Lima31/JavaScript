function produto(nome, preco = 1) {
    let qt = 0
    this.qtd = function () {
        qt += 1
    }
    this.valor = function () {
        console.log(`${nome}: R$ ${(qt * preco).toFixed(2)}`)
        this.total = qt * preco
    }
}

const leite = new produto('leite', 4.50)
leite.qtd()
leite.qtd()
leite.qtd()
leite.valor()

const arroz = new produto('Arroz', 6.49)
arroz.qtd()
arroz.qtd()
arroz.valor()

const Biscoitos = new produto('Biscoitos', 2.99)
Biscoitos.qtd()
Biscoitos.qtd()
Biscoitos.qtd()
Biscoitos.qtd()
Biscoitos.qtd()
Biscoitos.valor()

const Carne = new produto('Alcatra', 15.26)
Carne.qtd()
Carne.qtd()
Carne.valor()

const Frutas = new produto('Frutas', 2.35)
Frutas.qtd()
Frutas.qtd()
Frutas.qtd()
Frutas.qtd()
Frutas.valor()


console.log()
console.log(`Valor Total da Compra: R$ ${(Frutas.total + Carne.total + Biscoitos.total + arroz.total + leite.total).toFixed(2)}`)