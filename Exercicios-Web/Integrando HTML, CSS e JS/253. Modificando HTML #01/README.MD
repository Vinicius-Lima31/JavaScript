`const div1 = document.createElement("div")`

`div1.classList.add("destaque")`

`div1.innerHTML = "Primeiro"`

### Traduzindo o que fiz nas linhas de código acima:
* **Criei** uma `<div>` e a nomiei de **div1**.
* **Adcionei** um **class destaque** na **div1**.
* **Adcioniei** um conteúdo através do **innerHTML**, adcionei um **Texto**.

## Criação de <p> e adcionado em uma <div>
Após a criação da `<p>` irei adcionar em uma `<div>`.

`div3.appendChild(p)`

Adcionei um **paragrafo** `<p>` dentro de uma `<div>`, porém o **appendChild()** adciona no ultimo lugar, ou seja, se já tiver outro elemento dentro da `<div>`, ele ira **adcionar** o **elemento** na **ultima posição**.

## body.appendChild(div1)
Adcionei uma **div** no **body**:

![primeiro](https://user-images.githubusercontent.com/62820033/91904187-e0ce4080-ec7a-11ea-8df2-3ec64343b48f.png)

## body.appendChild(div2)
![segundo](https://user-images.githubusercontent.com/62820033/91904312-1a9f4700-ec7b-11ea-81e8-33189704a7df.png)

## body.appendChild(div3)
Também **Acrescentou** os filhos da `<div>3`, que no caso é um **paragrafo** que foi criado.

![terceiro](https://user-images.githubusercontent.com/62820033/91904445-50dcc680-ec7b-11ea-868a-1c501f3970c8.png)

## Adcionando Texto na div3
![createTextNode](https://user-images.githubusercontent.com/62820033/91905403-ddd44f80-ec7c-11ea-9a06-c4d78577b121.png)

![antes terceiro](https://user-images.githubusercontent.com/62820033/91905414-e462c700-ec7c-11ea-82c7-3ff2f5ae674d.png)

## cloneNode
`const div4 = div3.cloneNode(true)`

Eu clonei a **div3**, para adcionar na constante **div4**, esse **true**, significa se ele vai clonar os filhos também, caso estivesse **false**, ele não iria **clonar** os **filhos** da **div3**.

`body.appendChild(div4)`

![antes quarto](https://user-images.githubusercontent.com/62820033/91906000-d19cc200-ec7d-11ea-9933-4a39b862a771.png)

## body.removeChild(div3)
Removi a **div3** através desse comando de código, e o que ficou foi a **div4** que foi clonada através da **div3**.

