## Exame vaga Front-End

Para este exame, desenvolvi uma aplicação simples onde as requisições REST da API do Github me retornam informações como o meu nome e username, e também os meus repositórios contendo nome, descrição e última atualização. Na parte lógica eu utilizei o framework AngularJS 1 e para a parte visual o pré-processador Sass. Resolvi não aderir à responsividade do layout e ao uso de outros frameworks/bibliotecas para a parte visual, então criei o estilo do zero.

A aplicação conta com uma única view, onde resolvi organizá-la tal como um componente onde temos

```sh
# [Estrutura]
├── components
│  ├── main
│  │  ├── main.html
│  │  ├── main.service.js
│  │  ├── main.controller.js
│  │  ├── main.route.js
│  │  ├── main.style.scss
```

A aplicação, pode ser vista também pelo [Codepen](https://codepen.io/wevernek/pen/xPWEOm)

### Instalação

Antes de mais nada, você precisa ter o NodeJS em sua máquina para instalar as dependências do projeto

- [NodeJS](http://nodejs.org/)


```sh
# Clone este repositório
$ git clone https://github.com/wevernek/quero-trabalhar-no-edools_frontend
$ cd quero-trabalhar-no-edools_frontend

# No primeiro contato, rode o comando abaixo para instalar as dependências da aplicação
$ npm install

# Em seguida, inicie a aplicação com o comando abaixo
$ npm start
```