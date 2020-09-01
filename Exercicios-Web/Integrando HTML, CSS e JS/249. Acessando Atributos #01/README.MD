## Acessando Atributos
`const img = document.querySelector("img")`

`console.log("getAttribute", img.getAttribute("src"))`

`console.log("src", img.src)`

`console.log('["src"]', img['src'])`

**Imprimindo Link** da **Imagem** através do console, de diferentes formas.
*Na primeira linha de código, estou apenas obtendo a imagem através da tag, nas outras linhas estou imprimindo.*

## NodeType
Todos elementos, atributos, tem uma propriedade chamada **NodeType**.

`console.log("NodeType", img.nodeType)`

[Clique Aqui para Acessar o Site que mostra o que cada Número representa](https://www.w3schools.com/jsref/prop_node_nodetype.asp)

## console.log("NodeName", img.nodeName)
![nodeName](https://user-images.githubusercontent.com/62820033/91888900-5f1ee880-ec63-11ea-8123-97132e732064.png)

Imprimir no **console** o nome do **Atributo** ou **Elemento**.

## const link = document.querySelector("a")
Acessando **Link**.

**Imprimindo Link no console:**
`console.log("href", link.href)`

`link.innerHTML = "Novo Texto2`

![nvtx2](https://user-images.githubusercontent.com/62820033/91890363-b920ad80-ec65-11ea-9acd-7cb7e629ba49.png)

