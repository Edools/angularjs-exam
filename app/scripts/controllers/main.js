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
.controller('MainCtrl', function ($scope, UserInformation, UserRepositories) {
  $scope.limitVisualization = 5;
  $scope.username = 'marcelobarreto';

  $scope.visualizationToggle = function() {
    $scope.limitVisualization = $scope.repos.length;
  };

  $scope.reSearch = function(username) {
    $scope.username = username;
    loadUserInformation();
    loadUserRepositories();
  };

  var loadUserInformation = function(){
    UserInformation.getInfo($scope.username).success(function(data){
      $scope.user = data;
    }).error(function(data){
      $scope.userNotFound = true;
      $scope.usernameForm.$setPristine();
    });
  };

  var loadUserRepositories = function(){
    UserRepositories.getRepositories($scope.username).success(function(data){
      $scope.repos = data;
    }).error(function(data){
      console.log(data);
      $scope.error = 'Não foi possível carregar os repositórios deste usuário';
    });
  };

  loadUserInformation();
  loadUserRepositories();
});
