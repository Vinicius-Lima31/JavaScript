## Formulario
Primeiramente criei uma pasta chamada **form** dentro da pasta **exercicios**, dentro da pasta **form** eu criei 2 arquivos, `form.html` e `server.js`, esse `server.js` e para a gente usar **express** e o **body-parser**, temos que **instalar** o **package.json** para **dependencias**:

* `npm init -y` instalando **Package.json**
* `npm i --save express@4.16.3 -E` instalando o **Express**.
* `npm i --save body-parser@1.18.2 -E` instalando o **body-parser**.

## Criando Formulario no HTML
`<form action="http://localhost:3003/usuarios" method="POST">`
    `<input type="text" name="nome"> `
    `<button>Incluir</button>`
`</form>`

Criei um **formulario** que aponta para o **endereço** http://localhost:3003/usuarios 
Dentro desse formulario com um **input** e um **botão**.

![fomri](https://user-images.githubusercontent.com/62820033/82159401-2dc10f00-9864-11ea-9896-917c316f7181.png)

---

## Arquivo.js com express e body-parser
Importamos o **express** e o **body-parser** no arquivo **server.js**

"O que o **"body-parser"** vai fazer é, uma vez que submeto meus dados eu um **formulario** ele vai fazer um *parser* no corpo da **requisição**, vai pegar esses dados e jogar dentro do `request.body` , ou seja, quando eu acessar `request.body`, **eu vou ter acesso a todos os dados do formulario que submeti**"


#### Incluindo dado no formulario:

![inclu](https://user-images.githubusercontent.com/62820033/82159500-e12a0380-9864-11ea-824d-c13a46914301.png)

![paran](https://user-images.githubusercontent.com/62820033/82159504-e9823e80-9864-11ea-8826-1f9ae610c3b5.png)

E no **server.js** eu imprimo a requisição:

![porta](https://user-images.githubusercontent.com/62820033/82159514-fdc63b80-9864-11ea-8645-fa53ec92ec3d.png)


## Requisição 
A **requisição** é a forma que o **client** se comunica com **server**. O **client** manda uma **requisição** para o **server** e recebe uma **resposta**.

Aqui segue um artigo que fala resumidamente sobre o que são e como funcionam as **requisições**:
[Artigo, Clique Aqui](https://medium.com/clebertech/como-funciona-uma-requisi%C3%A7%C3%A3o-http-cf76f66fe36e) 

A palavra **Parse** em **linguagens de programação** está muito conectada ao conceito de transformar formato dados. O **body parser** não foge a esse conceito, ele é um **módulo** do **node** que transforma o **body** de **requisições** em vários formatos, como **JSON** por exemplo. Ele é um **middleware**, ou seja, um agente intermediário entre o **servidor** e o **client**.