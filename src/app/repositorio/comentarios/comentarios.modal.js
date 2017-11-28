(function() {
  'use strict';

    angular.module('roposDoolsGit')
        .factory('ComentariosIssueModal', ComentariosIssueModal);

    function ComentariosIssueModal($uibModal) {

        function comentariosModal(usuario, repositorio, issue) {
            var modal = $uibModal.open({
                backdrop: 'static',
                size: 'md',
                templateUrl: 'app/repositorio/comentarios/comentarios.html',
                controller: ComentariosIssueController,
                controllerAs: 'modalVm',
                resolve: {
                    usuario: function() {
                        return usuario;
                    },
                    repositorio: function() {
                        return repositorio;
                    },
                    issue: function() {
                        return issue;
                    }
                }
            });
            angular.extend(this, modal);
        }
        return comentariosModal;
    }

    /* @ngInject */
    function ComentariosIssueController(usuario, repositorio, issue, gitHubService) {
        var vm = this;

        activate();

        ////////////

        function activate() {
            vm.comentarios = [];
            vm.usuario = usuario;
            vm.repositorio = repositorio;
            vm.issue = issue;

            gitHubService.getComentarios(vm.usuario, vm.repositorio, vm.issue.number).then(function(response) {
                vm.comentarios = response.data;
            });
        }
    }
})();
