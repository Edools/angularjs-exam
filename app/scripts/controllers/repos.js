'use strict';

/**
 * @ngdoc function
 * @name queroTrabalharNoEdoolsFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the queroTrabalharNoEdoolsFrontendApp
 */
angular.module('queroTrabalharNoEdoolsFrontendApp')
  .controller('RepositoriesCtrl', function ($routeParams, User, $scope) {

    User.repositories($routeParams.login)
      .success(function (response) {
        $scope.repositories = response;
      })
      .error(function (error) {
        $scope.error = error
      });
  });
