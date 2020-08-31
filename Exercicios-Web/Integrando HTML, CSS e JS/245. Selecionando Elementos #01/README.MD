# Selecionando Elementos

## document.getElementById
Aqui ele espera **selecionar** um **ID**, de alguma **tag** por exemplo.

## document.getElementById("primeiro")
**Selecionei** uma **tag**, no meu código **HTML** tem uma `<div>` com um **id** chamado *"primeiro"*, estou selecionando essa `<div>`.

## document.getElementById("primeiro").classList.add("destaque")
Essa parte da **classList** sera falado depois, porém nela eu adcionei uma **class** chamada **"destaque"**, que no arquivo **CSS**, tem uma **class** chamada **destaque**, que faz com o que foi selecionado fique amarelo:

## Página antes
![aantes](https://user-images.githubusercontent.com/62820033/91754337-9e840100-eb9f-11ea-9df9-1bba4ecee338.png)


## Alteração no DOM
![dom](https://user-images.githubusercontent.com/62820033/91754386-b22f6780-eb9f-11ea-9441-b5248c36f2b3.png)


## Após Alteração no DOM
![depois](https://user-images.githubusercontent.com/62820033/91754425-beb3c000-eb9f-11ea-8582-b16f36455b60.png)

## const divs = document.getElementsByTagName("div")
Eu irei pegar *todas* as `<div>`, e com isso a **const**(constante), sera uma lista de `<div>`, é adequado transformar essa **lista** em um **Array**, usando:
`Array.from(divs)`

`Array.from(divs).forEach(e => e.classList.remove("destaque"))`
Na linha de cima, estou removendo a **class** ***destaque***, ou seja, não ficara *amarelo* novamente.

## Selecionando DOM, através de uma class
`const ultimosElementos = document.getElementsByTagName("ultimo")`
`       for(let e of ultimosElementos)`
`       {`
`         e.classList.remove("destaque") `
`       }`

**Selecionei** o **código** acima, através da **class** **"ultimo"**, e através do **for**, eu **removi** a **class** **destaque**, que estava presente, dentro de alguma **tag**, que possuia, a **class** como **"ultimo"**.

