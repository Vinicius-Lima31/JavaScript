const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charAt(2))
/* (''.charAt(n))
charAt retorna o caractere escrito naquela posição, igual C
començando do zero as posições
*/
console.log(escola.charCodeAt(3)) //CharCodeAt retorna a tecla ASCII
console.log(escola.charCodeAt('3')) // ASCII ou Unicode

console.log(escola.indexOf('3')) /* Informa em qual posição
está a string, caso retorne -1, significa que não tem*/

console.log(escola.substring(1)) //Incluindo 1 até o final
console.log(escola.substring(0, 3))
/* <--substring(n,n+1) significa que ele vai de uma posição até outra
    na Linha 17, ele ira da posição 0 até a posição 3 
    vai do indice 0 e me de 3 caracteres, sem incluir indice final*/

console.log('\nEscola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!") //Posso usar operador de soma, em vez da função concat
/*Concatenando as strings, somandos elas, se imprimido:
<<Escola Cod3r!>>
concatenei a palavra escola + constante escola + "!" = <<Escola Cod3r!>>
*/

console.log(escola.replace(3, 'e')) //Substituindo a posição 3 por 'e'
console.log(escola.replace(/\d/, 'e')) //outro curso

console.log('Ana, Maria, Pedro'.split(','))
/* slit(',') gerou um array(vetor) apartir das virgulas, foi criado
um vetor com 3 posições a partir das virgulas*/

console.log("3"+ 2)// ele não vai somar, não sera 5, sera 32
//Apenas com Soma (+)

const nome ='Vin1cius'
console.log(nome.replace(1,'í').concat(' lima ').concat('da Silva'))