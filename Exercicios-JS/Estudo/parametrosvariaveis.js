function soma(){
    let soma = 0
    soma = arguments[0] + arguments[1]
    console.log(soma)
}
soma(2,3)

function mult(){
    let mult = 1
    for(i in arguments)
        mult*=arguments[i] // representa cada parametro
    console.log(mult)
}

mult(2,3,4,100)