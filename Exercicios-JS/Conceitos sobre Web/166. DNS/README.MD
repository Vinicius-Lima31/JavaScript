## Servidor DNS
![servidor dns](https://user-images.githubusercontent.com/62820033/81368164-7be84c80-90c5-11ea-8427-1199bbf5ca8b.png)

**DNS** - Funciona sobre o Protocolo **UDP** na Porta 53.

**UDP**: User Datagram Protocol. 
É mais Rapido que o **TCP**, porém é bem menos seguro.

## Funcionamentto básico do DNS
**Passo a passo de uma requisição DNS**

1. Usuário Informar o **endereço** no **browser**.
2. Computador envia uma consulta **DNS** para o **servidor local**.
3. O **servidor** Responde com **Endereço IP**.
4. Computador Acessa o **servidor** a partir do **IP** obtido.

---
Existem 2 tipos de busca que o **DNS** pode fazer, **Busca Recursiva e Busca Iterativa**.

## Busca Recursiva
![busca recursiva](https://user-images.githubusercontent.com/62820033/81368547-645d9380-90c6-11ea-8b9b-0ccdb6092a52.png)

**DNS Primario** não respondeu, ele não sabe a resposta então ele pergunta pro próximo, o **segundo (cache)**, até conseguir a resposta, até conseguir o **endereço IP**.
E ele volta com a resposta, caso o DNS saiba o **Endereço IP**.

## Busca Iterativa
![Busca Iterativa](https://user-images.githubusercontent.com/62820033/81368690-c6b69400-90c6-11ea-9af4-d834d792fae7.png)

Essa "**Referência**" é outro **DNS** que ele ira retornar um **endereço IP**.

---

**Busca Recursiva** - que um **DNS** vai chamando outro **DNS**, até conseguir encontrar de fato o **endereço IP**.

**Busca Iterativa** - ele manda um **DNS** de **referencia**, para chammar outro **DNS**, que retorne de fato o **endereço IP**.

### DNS Records (Registros DNS)
* A - **IPv4** 
* AAAA - **IPv6**
* MX - **Servidor de E-mail** = Referencia um Tipo de **E-mail**, por exemplo o GMAIL do **Google**.
* NS - **servidor DNS** = (Apontando para outro **DNS**)
* CNAME - **Canocical Name(Apelido)** = **Endereço** Apontando para outro **Endereço**.