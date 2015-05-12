var app = angular.module('edoolsApp', [
        'ngRoute',
        'homeModule'
    ])
    .config(function ($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
            
});
