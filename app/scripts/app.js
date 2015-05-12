'use strict';

/**
 * @ngdoc overview
 * @name myghApp
 * @description
 * # myghApp
 *
 * Main module of the application.
 */
angular
  .module('myghApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
