# Adcionando Botão para alterar
Lembrando que o botão que ja tem dentro do `<form>` ele é responsavel por incluir, eu teria que fazer uma pequena alteração, por exemplo:

`<button formaction="http://localhost:3003/usuarios" formmethod="POST">Incluir</button>` 

Agora ele estara apontando para esse endereço, usando método **POST**

`<button formaction="http://localhost:3003/usuarios/3" formmethod="POST">Alterar</button>`

Agora ele estara apontando para outra coisa, botei para como se tivesse apontando para um id 3.

![zczxcxzcxz](https://user-images.githubusercontent.com/62820033/82162389-71267800-987a-11ea-9d4c-b3b190fd30a2.png)

## <input> não-visivel
Ele serve para carregar um valor que não quero exibir.

`<input type="hidden" name="id" value="41">` por exemplo.

---

## JavaSript (server.js)
`app.post("/usuarios/:id", (req, resp, next)` => // Vou passar um id para ser alterado
`{

    console.log(req.params.id) // quero que ele mostre o "id"
    
    console.log(req.body) // Mostre o que foi adcionado no formulario
    
    resp.send("Parabéns. Usuario Alterado") 
    
})`

Não tem muito misterio, recebo um **id** por **parametro** da **url** e altero.

![xxxxx](https://user-images.githubusercontent.com/62820033/82162438-e003d100-987a-11ea-8b8a-86448566d69c.png)

**console** imprimindo o que coloquei dentro da função `app.post...`

![console logasd](https://user-images.githubusercontent.com/62820033/82162453-0aee2500-987b-11ea-93d8-a67456f776b5.png)

