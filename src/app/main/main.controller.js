(function() {
    'use strict';

    angular
        .module('testeFrontEnd')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($timeout) {
        var vm = this;

        vm.classAnimation = '';

        activate();

        function activate() {
            $timeout(function() {
                vm.classAnimation = 'rubberBand';
            }, 4000);
        }

    }
})();