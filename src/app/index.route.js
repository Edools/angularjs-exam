(function() {
    'use strict';

    angular
        .module('testeFrontEnd')
        .config(routeConfig);

    function routeConfig($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .when('/repositories', {
                templateUrl: 'app/repositories/repositories.html',
                controller: 'RepositoriesController',
                controllerAs: 'vm'
            })
            .when('/repositories/:term', {
                templateUrl: 'app/repositories/repositories.html',
                controller: 'RepositoriesController',
                controllerAs: 'vm'
            })
            .when('/repository/:owner/:name', {
                templateUrl: 'app/repository/repository.html',
                controller: 'RepositoryController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider
            .html5Mode(true);
    }

})();