<div align="center">
<h2>Não sabe o que é um Coding Dojo?</h2>

É uma reunião de desenvolvedores para trocar ideias e resolver, juntos, um problema. Não precisa ser expert nem manjar de todos os paranauês, basta ter interesse!
<br><br>
Este dojo foi baseado em um desafio lançado!
</div>
<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/rodrigovalentim/Dojo-Coding-nuvem-cinza">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rodrigovalentim/Dojo-Coding-nuvem-cinza">

  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/rodrigovalentim/Dojo-Coding-nuvem-cinza">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/rodrigovalentim/Dojo-Coding-nuvem-cinza">

</div>

Um vulcão acaba de entrar em erupção, provocando uma nuvem de cinzas que se alastra impedindo a circulação aérea. O governo está muito preocupado e deseja saber quando que a nuvem de cinzas irá atingir todos os aeroportos do país.

Está disponível um mapa detalhando a situação atual. O mapa é retangular, dividido em pequenos quadrados. Neste mapa existem três tipos de quadrados: nuvem (indicando que esta região do mapa já está coberto por nuvens), aeroportos (indicando a localização de um aeroporto) e todas as outras (indicando locais onde a nuvem ainda não chegou).

A cada dia, a nuvem expande-se um quadrado na horizontal e um quadrado na vertical. Ou seja, ao fim de cada dia, todos os quadrados adjacentes (vertical e horizontal) a uma nuvem, também passam a conter nuvens. Por exemplo:

```sh
. . * . . . * *      . * * * . * * *     * * * * * * * *
. * * . . . . .      * * * * . . * *     * * * * * * * *
* * * . A . . A      * * * * A . . A     * * * * * . * *
. * . . . . . .  ->  * * * . . . . .  -> * * * * . . . .
. * . . . . A .      * * * . . . A .     * * * * . . A .
. . . A . . . .      . * . A . . . .     * * * A . . . .
. . . . . . . .      . . . . . . . .     . * . . . . . .
     Dia 1                Dia 2               Dia 3
```

Para preparar os planos de contingência, o governo necessita saber: quantos dias demorará para ao menos um aeroporto ficar coberto pelas nuvens e daqui quantos dias todos os aeroportos estarão cobertos pelas nuvens.

Dados um quadriculado com L linhas e C colunas, além da indicação inicial das nuvens e dos aeroportos, desenvolva uma programa que informe o número de dias até um primeiro aeroporto ficar debaixo da nuvem de cinzas e o número de dias até que todos os aeroportos ficarem cobertos pelas cinzas.

---


## Need install node 12.16.2
```sh
nvm install 12.16.2
```

## Download dependences
```sh
yarn
```

## Start Front end
```sh
yarn start
```

## Start Backend
```sh
yarn dev:server
```

- LinkedIn: <a href="https://www.linkedin.com/in/rodrigoovalentim/">[@rodrigoovalentim]</a>
