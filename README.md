AngularJS Exam
==============

Neste trabalho extraiu-se, da api do github, os projetos do Mojombo. Nele é possível observar o numero de forks e watchers de seus projetos e visitar a página cada um deles. A página desenvolvida possui um campo de busca onde é possível filtrar os projetos conforme vai se digitando no campo de busca.

Para desenvolver o trabalho foram utilizados:
- bootstrap: para estilizar a página mais rapidamente e faze-la responsiva
- Grunt: para automação de tarefas. Foram utilizados os seguintes plugins:
    - SASS: para desenvolver o estilo complementar da página: "efeitos.css" 
    - Watch: 
        - para compilar automaticamente o sass cada vez que ele fosse salvo 
        - recarregar a página a cada modificação salva 
    - browserSync: sincronizar diversos dispositivos para teste e tornar seu
    acesso por dispositivos móveis mais fácil.

Como rodar o Projeto
=====================

- instale os pacote necessários digitando, no diretório do projeto: npm install
- para rodar o servidor de ver as ferramentas utilizadas funcionando, basta digitar no diretório do projeto: grunt server


