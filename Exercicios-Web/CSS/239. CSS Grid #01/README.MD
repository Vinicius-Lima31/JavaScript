# CSS GRID
![div 1 a 12](https://user-images.githubusercontent.com/62820033/91472499-e9370d80-e86d-11ea-8916-abf62810d031.png)

## grid-template-columns: 50% 50%;
Dividi em 2 colunas de 50%:

![TEMPLATE](https://user-images.githubusercontent.com/62820033/91473626-8a729380-e86f-11ea-8f27-b7dbd7948c7a.png)


## grid-template-columns: repeat(4, 8.33% 8.33% 8.33%);
Dividi em 12 colunas de 8.33%:

![repeat](https://user-images.githubusercontent.com/62820033/91474224-5055c180-e870-11ea-83f0-832aafb5db3c.png)


## grid-template-columns: 200px 20% 1fr;
Será formada por 3 Colunas, uma de 200px, outra de 20%, e outro de 1 fragmento, ou seja, todo restante:

![fr](https://user-images.githubusercontent.com/62820033/91476665-ab3ce800-e873-11ea-8fc2-319b3587d353.png)


## grid-template-rows: 50% 25% 12.5% 12.5%;
Sera alinhada por linhas e não colunas, com a primeira valendo 50%, segunda 25% e as outras 12.5% :

![row](https://user-images.githubusercontent.com/62820033/91477183-65345400-e874-11ea-9ea1-4cc8199f8bda.png)


## grid-template-rows: 100px auto;
A Primeira ficara com 100px, e as outras ficaram com o resto de forma que serão dividas de forma iguais:

![auto](https://user-images.githubusercontent.com/62820033/91477773-366aad80-e875-11ea-9333-ee217d5f4629.png)

## Marcações de linhas em colunas:
![columm](https://user-images.githubusercontent.com/62820033/91479164-6e72f000-e877-11ea-8830-7ac14056479e.png)


## grid-column-start: 2; grid-column-end: 4;
A `div 8` começara da coluna 2, e terminara na coluna 4 (Minuto 16:30):

![2 a 4](https://user-images.githubusercontent.com/62820033/91478759-cceb9e80-e876-11ea-8b21-4ce842783236.png)

`grid-column-end: span2;` ira pular **2 casas**, igual fez *acima*, porem o **span** faz com que **pule 2 casas**.

## Marcações de linhas em retas:
![rowwwww](https://user-images.githubusercontent.com/62820033/91479351-ada14100-e877-11ea-9815-852ded2af67c.png)


## grid-row-start: 3; grid-row-end: 5;
Começara da linha 3 do **row**, até a linha 5:

![2l](https://user-images.githubusercontent.com/62820033/91479607-12f53200-e878-11ea-9471-6ca5fbc08096.png)


