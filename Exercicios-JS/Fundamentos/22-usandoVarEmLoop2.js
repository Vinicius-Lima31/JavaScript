const funcs = [] // var ou const não tem diferença

for (var i = 0; i < 10; i++) { //aqui o var faz diferença
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2]() //Sera 10 Sempre
funcs[8]() //Sera 10 Sempre
//Isso é  um problema Historico do JS