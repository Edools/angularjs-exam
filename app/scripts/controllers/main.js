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
.controller('MainCtrl', function ($scope, $uibModal, userInformation, userRepositories) {
  $scope.limitVisualization = 5;
  $scope.username = 'marcelobarreto';

  $scope.visualizationToggle = function() {
    $scope.limitVisualization = $scope.repos.length;
  };

  $scope.research = function(username) {
    $scope.username = username;
    loadUserInformation();
    loadUserRepositories();
  };

  var loadUserInformation = function(){
    userInformation.getInfo($scope.username).success(function(data){
      $scope.user = data;
    }).error(function(data){
      console.log(data);
    });
  };

  var loadUserRepositories = function(){
    userRepositories.getRepositories($scope.username).success(function(data){
      $scope.repos = data;
    }).error(function(data){
      console.log(data);
      $scope.error = 'Não foi possível carregar os repositórios deste usuário';
    });
  };

  loadUserInformation();
  loadUserRepositories();
});
