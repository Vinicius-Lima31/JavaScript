## Importante! http-server
Por padrão o `http-server` que é o que usamos para "startar", uso `http-server .` para acessar os arquivos e tals.
Mas por padrão o `http-server` tem um **cache**, e eu quero desabilitar esse **cache**.
Para desabilitar eu uso : `http-server -c-1 .`
Se eu colocar `http-server -c10` Significa que eu quero deixar o **cache** habilitado por *10 segundos*, se eu colocar **-1** no final, ele vai entender que quero **desabilitar**.
`http-server -c-1 .`

Significa que o **cache** está desativado, e que não ficara nada gravado na memória, porque mesmo se eu excluisse a pasta `teste.html`, e depois abrisse o **Browser** ele iria acessar o `teste.html` porque estava gravada no **cache**, agora com ele **desabilitado**, ele não ira acessar mais nada.

#### É IMPORTANTE DESABILITAR PARA NÃO TER PROBLEMAS COM CACHE

## Nivéis de Cabeçalho
Não tem haver diretamente com Tamanho, e sim com grau de importancia.

![niveis cabeçalho](https://user-images.githubusercontent.com/62820033/82089123-5f51a300-96c9-11ea-9622-6ec1ea16214a.png)

`<h1> <h2> <h3> <h4> <h5> <h6>`

## Tag's usadas na Aula
![czxczxcxxzczx](https://user-images.githubusercontent.com/62820033/82089916-e7847800-96ca-11ea-96e5-33155cecbbd5.png)