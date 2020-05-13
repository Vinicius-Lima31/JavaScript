const dialogo = (segundos) =>
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(()=>
        {
            let seg = new Date().getSeconds()
            let min = new Date().getMinutes()
            let hr = new Date().getHours()

            resolve(`Será imprimido ás ${hr}:${min}:${seg}`)
        },  segundos * 1000)
    })
}

dialogo(120)
    .then(imp => console.log(imp))
    .catch(e => console.log(e.message))
