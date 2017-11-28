(function() {
    'use strict';

    angular
        .module('roposDoolsGit')
        .factory('gitHubService', gitHubService);

    /** @ngInject */
    function gitHubService($http) {
        var service = this;

        service.getIssues = getIssues;
        service.getReadme = getReadme;
        service.getComentarios = getComentarios;
        service.getRepositorios = getRepositorios;

        service.urlApi = "https://api.github.com";

        function getRepositorios(termo, pagina, quantidadePorPagina) {
            return $http({
                method: 'GET',
                url: service.urlApi + "/search/repositories",
                params: {
                    q: termo,
                    page: pagina,
                    per_page: quantidadePorPagina
                }
            });
        }

        function getReadme(usuario, repositorio) {
            return $http.get(service.urlApi + '/repos/' + usuario + '/' + repositorio + '/readme');
        }

        function getIssues(usuario, repositorio) {
            return $http.get(service.urlApi + '/repos/' + usuario + '/' + repositorio + '/issues');
        }

        function getComentarios(usuario, repositorio, issue) {
            return $http.get(service.urlApi + '/repos/' + usuario + '/' + repositorio + '/issues/' + issue + '/comments');
        }

        return service;
    }
})();
