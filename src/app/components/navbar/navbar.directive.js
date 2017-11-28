(function() {
    'use strict';

    angular
        .module('roposDoolsGit')
        .directive('navbar', navbar);

    /** @ngInject */
    function navbar() {
        var directive = {
          restrict: 'E',
          templateUrl: 'app/components/navbar/navbar.html',
          controller: NavbarController,
          controllerAs: 'dirVm',
          bindToController: true
        };

        return directive;

        /** @ngInject */
        function NavbarController(){}
    }
})();
