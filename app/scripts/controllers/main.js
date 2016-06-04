'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */

 //https://api.github.com/users/marcelobarreto -> user information
 //https://api.github.com/users/marcelobarreto/repos -> user repositories

angular.module('angularApp')
.controller('MainCtrl', function ($scope, userInformation, userRepositories) {
  $scope.limitVisualization = 5;

  $scope.visualizationToggle = function() {
    $scope.limitVisualization = $scope.repos.length;
  };

  var loadUserInformation = function(){
    userInformation.getInfo().success(function(data){
      $scope.user = data;
    }).error(function(data){
      console.log(data);
      $scope.error = 'Não foi possível carregar os dados deste usuário';
    });
  };

  var loadUserRepositories = function(){
    userRepositories.getRepositories().success(function(data){
      $scope.repos = data;
    }).error(function(data){
      console.log(data);
      $scope.error = 'Não foi possível carregar os repositórios deste usuário';
    });
  };

  loadUserInformation();
  loadUserRepositories();
});
