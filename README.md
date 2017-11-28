# RoposDoolsGit
RoposDoolsGit é um projeto desenvolvido em AngularJs, proposto pela Edools como atividade na avalição da vaga de Front-End. 


## Funcionalidades
* Buscar repositórios;
* Visualizar as issues de um repositório;
* Visualizar o Readme de um repositório;
* Visualizar os comentários de cada issue;

## Arquitetura
O RoposDoolsGit foi desenvolvido utilizando Angularjs.

## Ferramentas usadas
* `Gulp`;
* `Bower`;
* `NodeJs`;
* `BrowserSync`;
* `Yeoman Generator Gulp Angular`

## Estilo
Foi utilizado a biblioteca bootstrap para padronização do layout. Bem como less para personalização dos estilos.


# Para iniciar o projeto

Preparando o ambiente de desenvolvimento:

```
$ npm install -g gulp bower
```

Instale as dependências execute o comando na pasta da aplicação:

```
$ npm install
```

Para iniciar o servidor execute:

```
$ gulp serve
```

Para buildar a aplicação execute o comando abaixo:

```
$ gulp build
```

Os arquivos buildados irão ser encontrado na pasta dist.

O projeto já esta configurado para criação de tests. Porém eles serão desenvolvidos em uma próxima oportunidade.