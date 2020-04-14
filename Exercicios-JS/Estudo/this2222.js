var obj = {foo: 'foo'}
console.log(obj)
function fc (){
    return this
}
console.log(fc.apply(obj))
console.log(fc.call(obj))