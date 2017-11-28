(function() {
    'use strict';

    angular
        .module('roposDoolsGit')
        .controller('HomeController', HomeController);

        /** @ngInject */
    function HomeController(gitHubService, $routeParams) {
        var vm = this;

        vm.prevPage = prevPage;
        vm.nextPage = nextPage;
        vm.hasPrevPage = hasPrevPage;
        vm.hasNextPage = hasNextPage;
        vm.buscarRepositorios = buscarRepositorios;

        activate();

        function activate() {
            vm.busca = "";
            if($routeParams.busca){
                vm.busca = $routeParams.busca;
            }

            vm.pagina = 1;
            vm.quantidadePorPagina = 15;
            vm.totalRepositorios = 0;
            paginar();
        }

        function buscarRepositorios() {
            vm.pagina = 1;
            paginar();
        }

        function paginar() {
            if(vm.busca !== ""){
                gitHubService.getRepositorios(vm.busca, vm.pagina)
                    .then(function(response){
                        vm.repositorios = response.data.items;
                        vm.totalRepositorios = response.data.total_count;
                        vm.totalPaginas = parseInt(vm.totalRepositorios / vm.quantidadePorPagina);
                    });
            } else {
                vm.repositorios = null;
            }
        }

        function nextPage() {
            vm.pagina++;
            paginar();
        }

        function prevPage() {
            vm.pagina--;
            paginar();
        }

        function hasPrevPage() {
            return (vm.pagina - 1) > 0;
        }

        function hasNextPage() {
            return (vm.pagina + 1) * vm.quantidadePorPagina <= vm.totalRepositorios;
        }
    }
})();
