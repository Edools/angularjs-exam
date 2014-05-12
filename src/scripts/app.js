/*********************************************************************
*
*  app.js
*  app and states definition
*
*********************************************************************/
angular
  .module('ngGithub', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngAnimate',
    'ngGithub.controllers.repos',
    'ngGithub.controllers.repo',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    'use strict';
    $stateProvider
      /* Search state, had to be created because of a bug on reloadOnSearch prop */
      .state('search', {
        url: '/search',
        templateUrl: 'views/search.html',
        controller: 'reposController',
        reloadOnSearch: false
      })
      /* Repositories list state */
      .state('search.repos', {
        url: '/repos?q',
        reloadOnSearch: false,
        views: {
          'repos@search': {
            templateUrl: 'views/repos/repos.html',
            controller: 'reposController'
          }
        }
      })
      /* Repository detail state */
      .state('search.repos.repo', {
        url: '/:repo',
        views: {
          'repo@search.repos': {
            templateUrl: 'views/repos/repo.html',
            controller: 'repoController'
          }
        }
      });

    $urlRouterProvider.otherwise('search/repos');
  });


/* Initializing the app */
angular
  .element(document)
  .ready(function () {
    'use strict';
    angular.bootstrap(document, ['ngGithub']);
  });