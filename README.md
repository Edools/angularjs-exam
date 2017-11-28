# GitSearch
O projeto GitSearch foi desenvolvido utilizando AngularJs, com o objetivo de consumir a api do GitHub para realizar pesquisas de repositórios. Ele foi criado como uma atividade para avaliação da vaga de Front-end da Edools.

## Funcionalidades
O sistema possui as seguintes funcionalidades:
* Buscar repositórios
* Exibir uma lista com os repositórios, exibindo o número de stars e forks 
* Ordenar os resultados pelo número de stars, forks ou data de atualização, em ordem crescentende ou descrescente
* Visualizar os detalhes de um repositório, como o Read-me
* Visualizar as issues de cada repositório

## Arquitetura e Estilo
O projeto foi desenvolvido em AngularJs e utiliza a biblioteca Bootstrap para compor o seu estilo e Less para personalização. 

## Ferramentas utilizadas
* `Gulp`;
* `Bower`;
* `NodeJs`;
* `BrowserSync`;
* `Yeoman`;
* `Generator Gulp Angular`

# Para executar o projeto

Para executar o projeto é necessário preparar o ambiente de desenvolvimento, rodando o seguinte comando:

```
$ npm install -g gulp bower
```

Em seguida, é necessário instalar as dependências do projeto, executando o comando abaixo:

```
$ npm install
```

Para iniciar a aplicação, basta rodar o comando:

```
$ gulp serve
```

E para realizar o build do porjeto, é necessário executar o comando abaixo:

```
$ gulp build
```
O projeto buildado poderá ser encontardo dentro da pasta dist.

# Projetos Futuros

O projeto foi criado com a base inicial para os testes que serão desenvolvidos futuramente, além da paginação dos repositórios e issues.