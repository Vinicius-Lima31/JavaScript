const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
}

console.log(`${obj1.e}`
)
console.log(JSON.stringify(obj1))

const obj2 = '{"a" : 2, "b" : 4, "c": 6, "d": 8, "e": 10}'

console.log(obj2)
String.prototype.json = function () {
    return JSON.parse(this)
}

console.log(obj2.json())


