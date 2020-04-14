// IIFE -> Immediately Invoked Function Expression
//Imediatamente Invocada

(function () { //Qualquer coisa que eu criar aqui, so estara disponivel aqui dentro
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})() //tenho que usar esses parenteses para invocar na hora

//função anonima entre parenteses, so funciona se tiver parenteses
//Fugindo do escopo global