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
.controller('MainCtrl', function ($scope, UserInformations, UserRepositories) {
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
    UserInformations.get({
      username: $scope.username
    }).$promise.then(function(data){
      $scope.user = data;
    }, function(error){
      console.log(error);
      $scope.userNotFound = true;
      $scope.usernameForm.$setPristine();
    });
  };

  var loadUserRepositories = function(){
    UserRepositories.get({
      username: $scope.username
    }).$promise.then(function(data){
      $scope.repos = data;
    }, function(error){
      console.log(error);
      $scope.error = 'Não foi possível carregar os repositórios deste usuário';
    });
  };

  loadUserInformation();
  loadUserRepositories();
});
