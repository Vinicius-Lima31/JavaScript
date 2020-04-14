function res() {
    console.log(this.oi)
    console.log(this.x)
    console.log()
}
const pessoa = {
    oi: 'ola',
    x: 5+5,
    res
}

pessoa.res()
const o = pessoa.res.bind(pessoa)
o()

function op() {
    this.num1 = 1
    setInterval(function(){
        this.num1*=2
        console.log(this.num1)
        
    }.bind(this),5000)
}

new op

