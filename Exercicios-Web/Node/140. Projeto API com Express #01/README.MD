# Usando Express

1. Primeiro criei uma pasta Chamada **Projetos**
2. Dentro dessa pasta **Projetos** crio um **__package.json__** usando `npm init -y`.
3. Lembrando que esse `-y` é para dizer sim para todas as perguntas.
4. Depois instalamos a **Dependencia** **_express_** no **__package.json__**.
5. Instalamos usando `npm i --save express@4.16.2 -E`. esse `-E` significa **exata**, ou seja, ira instalar a versão exata que eu passei.
6. Após isso eu instalei o **express** dentro do **__package.json__** que criei.

## Criando Código-Fonte

* Criado uma pasta chamada **src** feita para guardar meu código-fonte
* Criei um arquivo **JavaScript** chamado **Servidor.js**.

## Portas 

Quando eu for usar alguma *aplicação* que tem comunicação com a __**Rede**__, eu tenho que declarar uma **Porta**.
Uma **Porta** é um processo dentro do Computador, exemplo:
    Um Computador quer fazer uma *comunicação* em rede com outro computador, **Quando os 2 computadores vão se comunicar em rede, além de ter um Endereço IP para que eu saiba aonde está a Maquina, eu preciso mandar uma informmação de uma maquina para outra e tenho que dizer: "Essa informação vai ser interpretada por aquela Máquina que estar nesse Endereço IP e nessa portta".**
    Preciso da **Porta**, porque dentro daquela **Maquina**, por que dentro daquela **Maquina** que vai receber a *Requisição* existem varias aplicações que estão rodando na internet.
    
Então cada Processo que tenha que abrir uma **conexão com Rede**, precisa ter uma **porta** e essa **porta** é "única" por processo!