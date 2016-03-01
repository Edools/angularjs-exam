# Ederson - AngularJS Exam Edools
## Objetivo da applicação
A aplicação se conecta com uma api do git hub e faz uma busca de todos os repositorios pelo nome e retorna em uma lista contendo informações sobre o repositorio.
É preciso digitar pelo menos 5 letrar para o sistema iniciar a busca.
Se o usuario clicar na linha daquele repositorio o sistema abrirá uma nova aba diretamente naquele repositorio do github
**a aplicação está disponivel [edersonangular.azurewebsites.net](http://edersonangular.azurewebsites.net/)**
## Arquitetura
A aplicação web foi desenvolvida com angularJS, com o bower como gestor de dependencia e o gulp para automatizar as tarefas. O gulp também realiza alguns testes para ver se tem arquivos faltantes.
## Estrutura de diretorios
O sistema está dividido nos seguintes diretórios:
- app
  * css
  * js
  * views
- master
  * js
    * components
      * search
  * less
- vendor
### app
A pasta app contem os arquivos de distribuição css, js (compactados e uglifyed) e views (html)
### master
A pasta master contem os arquivos "fontes" js e less.
Na pasta js tem os arquivos de inicialização e de roteamento e a aplicação foi modularizada na pasta components e depois na pasta search que contem o controller e o services em angularjs.
### vendor
A pasta vendor contem arquivos externos como fontes awesome entre outros.

### Instalação
Você precisa ter o NodeJs e NPM instalados

Você precisa instalar o bower
```sh
$ npm install -g bower
```

Você precisa instalar o gulp
```sh
$ npm install -g gulp
```

Depois de instalado o gulp e o bower é preciso rodar um npm install para instalar

```sh
$ npm install
```
E depois o bower install dentro da pasta master
```sh
$ cd master
$ bower install
```


### Debug e Edição
Você precisa rodar o gulp dentro do diretorio master
```sh
$ cd master
$ gulp
```
Com isso você pode editar os arquivos less e js que o gulp vai atualizar os arquivos js e css automaticamente na pasta app, onde o index.html está apontando.

### Distribuição
Você precisa rodar o gulp build dentro do diretorio master para compactar e huglify os arquivos 
```sh
$ cd master
$ gulp build
```
Para distribuir vc deve copiar somente a pasta app e o index.
