/*********************************************************************
*
*  controllers/repo
*  Controller to handle the repositories search
*
*********************************************************************/
angular.module('ngGithub.controllers.repos', [
    'ngGithub.factories.repo',
    'ngGithub.config'
  ])
  .controller('reposController', function ($scope, $rootScope, $location, repoFactory, $searchConfig) {
    'use strict';

    /* Query callbacks (DRY) */
    $scope.onQuerySuccess = function (result) {
      $scope.loading = false;
      $scope.failed = false;
      $rootScope.repos = result.items;
    };
    $scope.onQueryError = function () {
      $scope.loading = false;
      $scope.failed = true;
      $rootScope.repos = [];
    };

    /**
    * loadRepos
    * Load repos to the scope, passing the given query
    * @param: q (String/undefined)
    **/
    $scope.loadRepos = function (q) {
      repoFactory.query(q)
        .success($scope.onQuerySuccess)
        .error($scope.onQueryError);
      $scope.loading = true;
    };

    /* listen to querystring changes */
    $scope.$on('$locationChangeSuccess', function () {
      $scope.loadRepos($location.$$search.q);
    });

    /* Watch the search field changes */
    var counter = 0;
    $scope.$watch('q', function (newValue) {
      /* if there's no parameter, delete the querystring */
      var search = newValue === '' ? null : newValue;

      /* Query only when it reaches the minimum length */
      if(counter >= $searchConfig.minLength) {
        $location.search('q', search);
      }
      
      /* reset counter if user erases the query */
      counter = newValue === '' ? 0 : counter;
      counter++;
    });

    /* load initial data */
    if(!$scope.repos) {
      $scope.loadRepos();
    }
  });
