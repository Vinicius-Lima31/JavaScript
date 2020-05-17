## Adcionando input para senha
`<input type="password" name="senha">` 

![input senha](https://user-images.githubusercontent.com/62820033/82159667-521deb00-9866-11ea-85ab-4b91e16e4b13.png)

Adcionando no formulário:

![cad](https://user-images.githubusercontent.com/62820033/82159704-8c878800-9866-11ea-8e6e-1df4d0dcf6b4.png)

## Adcionando textarea
É como se fosse um texto para eu preencher:

![czxczxczxczxczxczxczxczxczxczxczxcxzczxczxczxclzxkjczxlkcz](https://user-images.githubusercontent.com/62820033/82159751-fdc73b00-9866-11ea-96d5-81692c2f9bab.png)

## Estilo textarea
`input, textarea{
    display: block; /
    margin-bottom: 10px; 
}`

`display: block` para colocar um em cada linha.
`margin-bottom: 10px` distancia de 10px de cada linha.

![fadlcxz](https://user-images.githubusercontent.com/62820033/82159845-b2615c80-9867-11ea-9f49-f40f2eea597b.png)

## Usando input do tipo radio
O `<input type="radio">` seria aquela bolinha que selecionamos:

![radio](https://user-images.githubusercontent.com/62820033/82159968-69f66e80-9868-11ea-87d2-099b49fbb510.png)

Adcionamos um estilo:

`input[type=radio]{
    display: inline;
}`

Ficando todo na mesma linha.
Percebe que só posso selecionar um, isso porque os `name` delas são **"tipo"**, `name="tipo"`, se fossem diferentes eu poderia selecionar os 2:

![czxvvv](https://user-images.githubusercontent.com/62820033/82160032-c6f22480-9868-11ea-822d-4f8e75dc4678.png)

## input do tipo chekbox
`<input type="checkbox">` é uma caixinha que marcamos, por exemplo:

![caixa](https://user-images.githubusercontent.com/62820033/82160429-b2fbf200-986b-11ea-830c-be049248e28b.png)

## <select> <option>
`<select name="estado">`
    
    `<option value="ac">Acre</option>`
    
    `<option value="ba">Bahia</option>`
    
    `<option value="ce">Ceara</option>`
    
`</select>`

`<option>` seria isso aqui:

![optin](https://user-images.githubusercontent.com/62820033/82160534-6ebd2180-986c-11ea-8b7c-054ad055c559.png)

---

**Por enquanto está assim o nosso formulario**

![dados](https://user-images.githubusercontent.com/62820033/82160560-9dd39300-986c-11ea-9063-a66c26e43dd7.png)

---

## <select> um select com multiplas opções
`<select name="interesses" multiple size="2">`
    
    `<option value="js">JavaScript</option>`
    
    `<option value="java">Java</option>`
    
    `<option value="php">PHP</option>`
    
    `<option value="python">Python</option>`
    
    `<option value="go"> Go</option>`
    
    `<option value="c">C</option>`
    
`</select>`

**Ira mostrar assim:**

![select](https://user-images.githubusercontent.com/62820033/82160868-9d3bfc00-986e-11ea-9101-d4538b713c46.png)

---
## Página Aula 184
![form](https://user-images.githubusercontent.com/62820033/82160951-39660300-986f-11ea-99f9-bbab78a67aa0.png)
