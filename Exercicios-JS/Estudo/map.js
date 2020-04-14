let array = []
/*
for (let i = 0; i <= 20; i++) {
    array.push(i)
}

console.log(array.filter(x => x % 2 == 0))
*/

const op = (x) => {
    x = []
    for(let i = 0; i<20 ; i++){
        x.push(i)
    }
    return x
}



console.log(op(array))
console.log(array)  