(function() {
    'use strict';

    angular
        .module('testeFrontEnd')
        .controller('RepositoriesController', RepositoriesController);

    /** @ngInject */
    function RepositoriesController($timeout, githubRepos, $routeParams) {

        var vm = this;

        vm.term = $routeParams.term;
        vm.classAnimation = '';
        vm.repositories = [];
        vm.selectedSort = null;
        vm.orderDesc = true;
        vm.order = "desc";

        vm.sorts = [
            { id: 1, name: 'stars' },
            { id: 2, name: 'forks' },
            { id: 3, name: 'updated' }
        ];

        //////////

        vm.getGithubRepos = getGithubRepos;
        vm.invertOrder = invertOrder;

        init();

        //////////

        function init() {

            vm.selectedSort = vm.sorts[0];
            getGithubRepos();
            $timeout(function() {
                vm.classAnimation = 'rubberBand';
            }, 4000);
        }

        function getGithubRepos() {
            if (vm.orderDesc) {
                vm.order = "desc";
            } else {
                vm.order = "asc";
            }

            githubRepos.getReposByTerm(vm.term, vm.selectedSort.name, vm.order).then(function(response) {
                vm.repositories = response.items;
            });
        }

        function invertOrder() {
            vm.orderDesc = !vm.orderDesc;
            getGithubRepos();
        }
    }
})();