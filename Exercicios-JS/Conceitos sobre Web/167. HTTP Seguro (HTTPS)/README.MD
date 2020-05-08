# HTTPSeguro

É um protocolo que a comunicação é **criptografada** e **segura**.

## HTTP'seguro
![httpseguro](https://user-images.githubusercontent.com/62820033/81433050-55182d80-913a-11ea-873b-d9e9148fa249.png)

Então, os dois aqui, são **protocolos** que juntamente comm **HTTP** faz com que nossas **navegações** sejam mais **seguras**.

## Certificado <> Protocolo
"**Certificado SSL/TLS**"
            ↓
"**Certificado usados com SSL/TLS**

## HTTPSeguro
* Dados criptografados usando os protocolos **TLS** ou **SSL**
* **Protege** contra interecepção (MITM).
* **Criptografa** todas as informações: URL, Cookies e headers.
* Usa **certificado Digitais**.

## Autoridade Certificadora
* Organizações que emitem e validam os certificados.

---

[Let's Encrypt](https://letsencrypt.org/pt-br/) A partir dela consigo gerar **certificado** valido e gratuito a partir dela, de uma forma bem simples para que se deseja ativar o **HTTP**.


*O **HTTPS** roda em cima de outros dois protocolos(**TLS DLS**), no caso o **TLS** é uma evolução do **SSL**.*

*TLS é a versão 4 do SSL*.


**Protocolo** é a regra de comunicação. Uma máquina consegue se comunicar com outra porque ambas já conhecem a **regra de comunição**, ou seja, é como se tivessem uma **linguagem em comum**. No **protocolo HTTPS**, nas suas **regras**, há a exigência de um **certificado**, para que a **conexão** seja tida como **segura**. Esses **certificados**, por sua vez, são obtidos por meio de autoridades **certificadoras**. Também é possível que o **certificado** seja autoassinado (esses são perfeitos para testes, ambientes de desenvolvimento ou qualquer outra coisa que requer **SSL**,mas que não tem necessidade que ser um certificado **SSL** confiável).