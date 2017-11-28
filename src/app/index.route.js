(function() {
    'use strict';

    angular
        .module('roposDoolsGit')
        .config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .when('/:busca', {
                templateUrl: 'app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .when('/repositorio/:usuario/:repo/:busca', {
                templateUrl: 'app/repositorio/repositorio.html',
                controller: 'RepositorioController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
