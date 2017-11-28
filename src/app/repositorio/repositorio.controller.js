(function() {
    'use strict';

    angular
        .module('roposDoolsGit')
        .controller('RepositorioController', RepositorioController);

    /** @ngInject */
    function RepositorioController(gitHubService, $routeParams, base64, ComentariosIssueModal) {
        var vm = this;

        vm.abrirComentarios = abrirComentarios;

        activate();

        function activate() {
            vm.readme = "";
            vm.usuario = $routeParams.usuario;
            vm.repositorio = $routeParams.repo;
            vm.busca = $routeParams.busca;

            gitHubService.getReadme(vm.usuario, vm.repositorio).then(function(response) {
                vm.readme = base64.decode(response.data.content);
            });

            gitHubService.getIssues(vm.usuario, vm.repositorio).then(function(response) {
                vm.issues = response.data;
            });
        }

        function abrirComentarios(issue) {
            var modalInstance = new ComentariosIssueModal(vm.usuario, vm.repositorio, issue);
        }

    }
})();
