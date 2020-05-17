# Tabela
`<table>` **TAG que defini criação da tabela.**

`<caption>` **seria o que representa minha tabela.**

`<thead>` **Cabeçalho da minha tabela.**

`<tbody>` **Corpo da minha tabela.**

## border (estilo a Tabela)
`<table border="1">` apenas uma **propriedade** que simplesmente adcionaria um pequeno estilo a tabela:

![czxczxczxczxczxczxcxz](https://user-images.githubusercontent.com/62820033/82156552-0b25fa80-9852-11ea-9caa-b17cedb76515.png)

## colspan (Posições oucupadas de uma Linha)
`<td colspan="3" >Total</td>` Minha tabela ira oucupar 3 espaços da linha da tabela:

![tot](https://user-images.githubusercontent.com/62820033/82156655-d23a5580-9852-11ea-996c-0909ef595b5e.png)


## rowspan (Adcionando mais de um valor em uma Linha)
`<td ... rowspan="2">Teste</td>` Minha tabela tera 2 resultados em uma única linha:

![teste](https://user-images.githubusercontent.com/62820033/82156803-d450e400-9853-11ea-80bd-61d9c304921f.png)

**Total** oucupando 3 colunas e 2 linhas

## Comandos CSS
`table{
    border-collapse: collapse;
}`

Significa que tirei as bordas da Tabela.

![czxzxczczxczx](https://user-images.githubusercontent.com/62820033/82157049-889f3a00-9855-11ea-9c2f-e6f4009d7a54.png)

---

`thead tr{
    border-bottom: solid 3px #444;
}`

Acessei o `<tr>` do `<thead>`, adcionei uma **borda na linha**, **borda solida**, com **3px**, e da **cor cinza escuro**.

![bborda](https://user-images.githubusercontent.com/62820033/82157104-e29fff80-9855-11ea-93f8-13c835188b04.png)

---

`tbody tr:houver{
    background-color: #dedede; 
}`

Acessei o `<tr>` do `<tbody>` usei a propriedade **houver**, quando eu passar com o **click do mouse por cima**, ele ira aplicar essa **propriedade**. No **código** acima, eu coloquei que quando eu passar o mouse por cima de alguma linha da **tabela**, a linha fique um cinza claro.

![dasdascxz](https://user-images.githubusercontent.com/62820033/82157258-b33dc280-9856-11ea-9155-2cbc3f3c482e.png)

![czxczxczxczxczxczxcxzczxczxczx](https://user-images.githubusercontent.com/62820033/82157263-b8027680-9856-11ea-869d-a8f87a9da313.png)

---

`tfoot{ 
    background-color: #444;
    color: #fff;
    font-weight: 
}`

Mexi no **Rodapé** da Tabela, um fundo com cinza escuro, fonte branca e negrito.

![tasdadsa](https://user-images.githubusercontent.com/62820033/82157409-a2418100-9857-11ea-8317-fc755de2f28e.png)

