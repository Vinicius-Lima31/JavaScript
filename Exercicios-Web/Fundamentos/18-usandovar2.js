var numero = 1
{
    var numero = 2
    console.log('dentro =', numero) //Sera imprimido 2
    //uso de virgula
}
console.log('fora= ',numero) //Também sera imprimido 2

/*
    Por isso que usar no escopo global é ruim, porque um 
    sobrescreve outra 
*/