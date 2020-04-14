function pessoa(nome, idade, sexo) {
    return {
        dados() {
            console.log(`Nome: ${nome} `)
            console.log(`Idade: ${idade} `)
            if (sexo == 'm' || sexo == 'M')
                console.log(`Sexo: Masculino`)
            else if (sexo == 'F' || sexo == 'f')
                console.log(`Sexo: Feminino`)

        }
    }
}

const p1 = new pessoa('Vinícius', 19, 'm')
p1.dados()

console.log()

function pess(nome, idade) {
    return {
        nome,
        idade,
        x() {
            console.log()
            console.log(nome + ' Lima da Silva')
            if (idade <= 5)
                console.log(idade + ' Aninhos')
            else
                console.log(idade + ' Anos')
        }
    }
}

console.log(pess('lucia', 15))

const p2 = new pess('Maria Beatriz', 5)
console.log(p2)
p2.x()

try{
    console.log(Fail)
}catch(e){
    throw `- ERROR NOT FOUND 404\n- Variavel Não existente\n- Variavel Não Declarada`
}
console.profileEnd()