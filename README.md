Exame vaga Front-End
====================

Caro desenvolvedor, o objetivo deste exame é conhecer um pouco mais sobre suas habilidades de programação. Aqui, na Edools, valorizamos muito a excelência, o código com boa qualidade nos faz trabalhar melhor e mais felizes :) e aumentar nossa capacidade de oferecer valor ao cliente com rapidez e consistência. Com isso em mente, queremos saber como você escreve seu código.

A tarefa é simples: brincar com a API da Edools. Você terá que desenvolver uma aplicação que consumirá alguns recursos da nossa API (https://core.myedools.info/). O que deve ser feito:

- Listar todas os aplicativos dísponíveis para a escola.
  
  Utilize o endpoint GET para trazer todas os aplicativos que existem na Edools
  https://core.myedools.info/features

- Exibir se o aplicativo na escola corrente está ativo ou não

  Utilize o endpoint GET para trazer todas as features que estão atreladas a escola
  https://core.myedools.info/schools/:school_id/school_features

- Ativar um aplicativo
  
  Utilize o endpoint PUT para ativar uma feature na escola
  https://core.myedools.info/school_features/:id/activate

- Desativar um aplicativo
  
  Utilize o endpoint PUT para desativar uma feature na escola
  https://core.myedools.info/school_features/:id/deactivate
  
Para conseguir realizar as chamadas na API, você vai precisar saber as seguintes informações:

- Todas as request precisam ter um token de autorização no header
  
  Ex: `$ curl -H 'Authorization: Token token="CREDENTIALS"`

- Esse é um token criado para essa vaga

  Token token="06a8e7ebfe3cb1c6d316edfc87a274ab:c42214a737df45d82aa274247841204d"
  
- Esse é o ID da escola utilizado para o teste dessa vaga

  ID: 64


Para começar, basta fazer o fork deste repositório, implementar e, em seguida, abrir um novo pull request, listando os recursos no README que você desenvolveu e como executá-lo.

A aplicação precisa ser desenvolvida com conceitos web components (https://tableless.com.br/web-components-introducao/). 
Além disos é necessário que aplicação seja desenvolvida usando um dos seguintes Framework: 

- Vue (https://vuejs.org)
- Angular (https://angularjs.org)
- React (https://reactjs.org)

É muito importante que você mostre seu conhecimento sobre boas práticas de programação, testes, padrões e até mesmo as más práticas. Portanto, tome estes pontos em consideração ao escolher e implementar seus recursos. Para que esta tarefa seja suficiente, gostaríamos que você usasse a sintaxe e recursos do ES6 do Javascript e que mantém seu código modularizado.

Além das coisas mencionadas acima, há algumas coisas que seriam uma grande vantagem para ver:

- use um pré-processador CSS de sua escolha
- uso de uma ferramenta para ajudá-lo com seus fluxos de trabalho (grunt, gulp, brócolis, webpack ...)

Desejamos-lhe boa sorte, e que a Qualidade esteja com você!
