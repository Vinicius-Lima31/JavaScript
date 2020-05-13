# ERRO

## Percebe que gerou um Erro
* Porém esse Erro só será falado na próxima aula: **142. Projeto API com Express #03**
* Esse erro é porque faltou uma **Dependência** que sera instalada na próxima aula.

## Sobre a aula 141
1. A **função** `salvarProduto` recebe como **parâmetro** um **produto**. Este **produto**, por sua vez, tem um **atributo** chamado **id**. A utilização dos **colchetes** se faz necessária para acessarmos **índices de um array**. Vamos supor que passamos um **produto** cujo **id é 2**.  Então `produto.id = 2`. Logo será acessado o **índice 2 do array produtos**, assim **produtos[2]**. Utilizando os colchetes é que acessamos um determinado índice de um array.

2. A **função** `getProduto` recebe como **parâmetro um id** e não um **produto**, portanto não existe a referência `produto.id` dentro dela e sim, apenas, **id**.

3. Aqui estamos fazendo uma **requisição** do tipo **get** passando na **url** `/produtos/:id `(aqui será **substituído** por um número que será o **id** a ser **procurado no array que simula o nosso banco de dados.)** Então, à partir da resposta `res`, nós utilizaremos o **método** `send` passando o **retorno** do **método getProduto** do nosso **"banco"** utilizando o **id** passado nos **parâmetros** via **URL**.

4. As **requisições** do tipo **post** não mandam **parâmetros** ou informações na **URL** e sim no corpo da **requisição** que é chamado de `body`. Então quando vamos salvar um **produto** mandamos dentro do `body` da **requisição** os atributos **nome** e **preco** e a maneira de resgatá-los é utilizando `req.body.nome` e `req.body.preco`.