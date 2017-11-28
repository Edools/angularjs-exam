(function() {
    'use strict';

    angular
        .module('testeFrontEnd')
        .directive('acmeNavbar', acmeNavbar);

    /** @ngInject */
    function acmeNavbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html',
            scope: {
                creationDate: '='
            },
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NavbarController($location) {
            var vm = this;
            vm.term = "";

            vm.searchReposForTerm = searchReposForTerm;

            function searchReposForTerm() {
                $location.path('/repositories/' + vm.term);
            }

        }
    }

})();