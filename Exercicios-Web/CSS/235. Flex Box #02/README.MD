`.flex-container div:nth-child(3) {`
    `order: 1;`
`}`

### Por padrão todos possuem order 0, coloquei como 1, e acontecera isso:
![order1](https://user-images.githubusercontent.com/62820033/91215633-28892100-e6eb-11ea-9cf4-0752c8ff9f7c.png)


### Caso eu coloque um peso negativo -1
Ele sera executado na frente de qualquer um que tenho o **order** 0.

### align-self: center;
Ira Centralizar:

![align slef](https://user-images.githubusercontent.com/62820033/91216063-bc5aed00-e6eb-11ea-815b-c3fadecd760d.png)


## flex-grow
![flex grow](https://user-images.githubusercontent.com/62820033/91216539-879b6580-e6ec-11ea-9dc6-fc43751a3cf2.png)


Tenho *4 elementos*, cada elemento ocupa **100px**, so que espaço inteiro da `div` é de **600**, significa que ainda falta **200px**.

**Minuto 6:30, explica direitinho sobre os cenarios**

![cen1](https://user-images.githubusercontent.com/62820033/91216963-26c05d00-e6ed-11ea-8b5a-b413fe2bb281.png)

Irei dar **peso 1 flex-grow** para cada `div`, e com isso farar uma **operação**, e sera dado para cada `div` mais **50px**, com isso, cada `div` ficara com **150px**.


Caso eu queria que um dos elementos(`div`) tenha um **flex-grow** maior, eu coloco o peso maior em um: (MINUTO: 7:20)
![cen2](https://user-images.githubusercontent.com/62820033/91217238-8e76a800-e6ed-11ea-944d-631d3952c02e.png)


### Usando Flex-grow
Deixando com `flex-grow: 0;` padrão:

![flexxx](https://user-images.githubusercontent.com/62820033/91217574-1a88cf80-e6ee-11ea-82e5-cd4094fb3417.png)


### Alterando:
`flex-grow: 1;` :
![flx](https://user-images.githubusercontent.com/62820033/91217729-5a4fb700-e6ee-11ea-9768-773fe2e842be.png)


