# Callback

## end e data
Por padrão, recebemos da web uma stream de dados, ou seja, os dados não vem por completo, tipo como se você estivesse fazendo o download de um arquivo mas já pudesse abrir ele sendo que aos poucos o resto do arquivo vai aparecendo. O **data** , é um **listener** que notifica quando chega um **chunk**, uma parte do dado enquanto o **end** informa quando o "download" **termina**. Sacou!

Quando recebemos dados do **frontend**, não recebemos todos os dados de uma vez, eles vem por partes,  o **"on data"** sinaliza toda vez que você recebe uma parte(**chunk**) desses dados. Já o **"on end"** sinaliza o fim do **recebimento dos dados**.

- Documentação do **on** [Clique Aqui](https://nodejs.org/docs/)