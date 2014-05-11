'use strict';


var URL_API = "https://api.github.com";

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.repositories',
  'myApp.issues',
  'myApp.users',
  'myApp.directives'
]).
config(['$routeProvider', function($routeProvider) {

  $routeProvider
  .when('/', {
  	templateUrl: 'partials/repositorios.html',
  	controller: 'RepositoriesController'
  })
  .when('/issues/:user/:repo', {
  	templateUrl: 'partials/issues.html',
  	controller: 'IssuesController'
  })
  .when('/users/:user', {
  	templateUrl: 'partials/users-repositorios.html',
  	controller: 'UsersController'
  })
  .otherwise({redirectTo: '/'});

}]);



