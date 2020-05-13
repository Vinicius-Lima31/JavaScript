# Especificando Sicrona e Assicrona

## Sicrona

**Sicrona:** Vai parar o **_Event Loop_** e vai imprimir após ser finalizado a execução, vai parar todo o **_Event Loop_** até realizar o Processo.
O resultado vai sair praticamente na mesmo hora. se for um Arquivo pequeno não vai causar impacto porque sera feito rapido, porém se for grande, ira atrasar as outras coisas. O **Sicrona** pausa o **_Event Loop_**.

## Assicrona

**Assicrona:** O **_evento Loop_** vai continuar rodando (Não é pausado o **_Evento Loop_**), só vai imprimir quando estiver pronta, ou seja, o resultado vai sair quando o processo for finalizado, podendo sair na hora ou não. Não atrasa os outros processos, porque só sera executado quando estiver pronto, independente das outras coisas. **Sicrona** pode ser imprimido antes da **Assicrona**.