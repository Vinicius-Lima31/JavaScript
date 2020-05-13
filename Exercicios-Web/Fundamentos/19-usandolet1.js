var numero = 1
{
    let numero = 2
    console.log('dentro =', numero) // 2
    //O q tem preferencia é o escopo menor
}
console.log('fora =', numero) //1

console.log('\n')

let numero2 = 3
{
    let numero2 = 4
    console.log('dentro = ', numero2)
}
console.log('fora = ', numero2)

//Preferencia é o escopo menor
console.log("\n");

let n = 10
{
    let n1 = 20
    console.log('dentro =', n) // Não tem 'n' dentro do escopo, ele ira procurar no escopo mais abragente
}
console.log('fora = ', n)