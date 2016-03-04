var app = angular.module('edools', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {templateUrl: '/src/partials/repos.html', controller: 'ReposController'})
    .when('/repos/:id/commits', {templateUrl: '/src/partials/commits.html', controller: 'CommitsController'})
    .otherwise({redirectTo: '/'});
})
