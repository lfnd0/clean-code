<p align="center">
  <img src="../.github/capa-ignite-clean-code.png" alt="Ignite Clean Code">
</p>

<br>

<h1 align="center">
  Código limpo com JavaScript
</h1>

### Nomenclatura de variáveis
- As nomenclaturas dadas às variáveis devem ter "sentido semântico" dentro do código e/ou ao seu contexto.
- Evitar:
  - Diminutivos;
  - Nomes genéricos (*data*, *response*, *args*, *params*, *loading*, *disabled*, *fetching*, *list*).
- Descrição do desafio:
  - [Nomeação de variáveis](https://efficient-sloth-d85.notion.site/Desafio-Nomea-o-de-vari-veis-0a8484a8cdc743558d6677910590a874)

### Código limpo em booleanos
- Os booleanos "guardam" estados da aplicação (habilitado/desabilitado).
- Os booleanos devem ser nomeados como perguntas (*is*, *does*, *has*):
  - *isDisabled*, *doesUserHasGroup*, *userHasPermission*.
- Booleanos sempre como perguntas, o mais semântico possível.
- Para facilitar na escrita dos booleanos, leia-os com um "if" na frente.
- Descrição do desafio:
  - [Booleanos](https://efficient-sloth-d85.notion.site/Desafio-Booleanos-aaab19f8e0394d20ae135c30094a7a3c)

### Causas *vs* efeito
- Durante o processo de codificação, devemos criar nossas variáveis com base na "causa"; e não no "efeito" ocasionado pela execução do código.
- Descrição do desafio:
  - [Causa/efeito](https://efficient-sloth-d85.notion.site/Desafio-Causa-vs-Efeito-a664fd5596c8467f9d5d66f3043ac9c5)

### Código em inglês
- O código "deve" ser escrito em inglês (variáveis, funções, tabelas no banco de dados).
- Desenvolver um código escrito em inglês auxilia na legibilidade do mesmo.
- Descrição do desafio:
  - [Código em inglês](https://efficient-sloth-d85.notion.site/Desafio-C-digo-em-ingl-s-ed988aa9dbf747a996d81b894327dfbd)

### Regras em condicionais
- Evitar negações como parâmetros em condicionais, pois, são mais difíceis de serem lidas/interpretadas.
- A negação dentro de condicionais atrapalha na legibilidade do código.
- Evitar condicionais aninhados, por exemplo, um *if* dentro de outro *if*; ou ainda um operador ternário dentro de outro operador ternário.
- *Early return*/*else*:
  - A depender da lógica implementada para a execução de um condicional *if*, vale a pena utilizar o *else*.
  - Para este cenário, podemos levar em consideração o "tamanho" da lógica implementada no condicional.
- Descrição do desafio:
  - [Regras em condicionais](https://efficient-sloth-d85.notion.site/Desafio-Regras-em-condicionais-d02ba76ad39e426f8f40bd49d25c0ebd)
