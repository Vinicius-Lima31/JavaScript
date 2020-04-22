// Quando a gente importa o "lodash" a gente sempre usa um " _ " como referencia
// Ele tem uma ordem de pesquisa e tals, é muito comum referencia a biblioteca "lodash" pelo " _ "
const _ = require("lodash") // <-- Tou requerindo a biblioteca "lodash" como " _ "

// "_.random" usei do lodash, da constante " _ "
setInterval(() => console.log(_.random(1, 10)) ,2000) // <-- Numero random de 1 entre 1000
// Ele vai executar de 2 em 2 segundos, esse "2000" acima, representa isso, o tempo!

/*
    Lembrando...
        npm i lodash <--- com esse comando eu instalo a "biblioteca" "lodash"

        npm i -g nodemon <-- Com esse comando eu instalo outra biblioteca, para eu usar o pront comando

        Significados:
            npm = node package manager
            i = install
            -g = global, para instalar de forma global, quando eu instalei o lodash, ele instalou apenas em "node_modules"

*/