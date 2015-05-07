var app = angular.module('edoolsApp', ['ngRoute'])
    .config(function ($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            })
            .when('/repositories', {
                templateUrl: 'views/repositories.html',
                controller: 'repositoriesCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
            
});
