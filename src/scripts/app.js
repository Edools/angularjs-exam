/*********************************************************************
*
*  app.js
*  app and route definition
*
*********************************************************************/
angular
  .module('ngGithub', [
    'ngResource',
    'ngRoute',
    'ngGithub.controllers',
    'ngGithub.config',
    'ngGithub.util'
  ])
  .config(function ($routeProvider) {
    'use strict';

    $routeProvider
      .when('/repos', {
        templateUrl: 'views/repos.html',
        controller: 'repoController'
      })
      .otherwise({
        redirectTo: '/repos'
      });
  });


/* Initializing the app */
angular
  .element(document)
  .ready(function () {
    'use strict';
    angular.bootstrap(document, ['ngGithub']);
  });