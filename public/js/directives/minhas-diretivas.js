angular.module('minhasDiretivas',[]).directive("meuPainel", function(){

    var ddo = {};

    ddo.restrict = "AE";

    ddo.scope = {
        // esse scope é somente da diretiva - é diferente que $scope
        titulo: "@"

    };

    ddo.transclude = true;
    /*
        1 - as diretivas vão manter os elementos filhos dela
        2 - deve ser dito em qual local da marcação deve ser mantido o elemento filho com a diretiva - ng-transclude
    */

    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;

});


/*

    O principal objetivo das diretivas é esconder a complexidade de um código de forma a tornar prática a sua reutilização

    1 - toda diretiva tem que possuir e retornar o objeto 'ddo'
    2 - Configurar o ddo: dizer que restrições de uso ela terá: usar como tag, atributo ou comentário.


    A tag de menuPainel tem sepre que vir com o nome com hífen:
    <meu-painel></meu-painel>
*/
