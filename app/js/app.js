var app = angular.module('testApp', ['ngRoute'])
    .config(function ($routeProvider) {
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
