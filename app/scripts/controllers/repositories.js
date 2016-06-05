'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:RepositoriesCtrl
 * @description
 * # RepositoriesCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
.controller('RepositoriesCtrl', function ($scope, $routeParams, Repository, RepositoryIssues, RepositoryPullRequests) {
  $scope.username = $routeParams.username;
  $scope.reponame = $routeParams.reponame;

  var loadRepository = function(){
    Repository.getRepository($scope.username, $scope.reponame).success(function(data){
      $scope.repo = data;
    }).error(function(data){
      console.log(data);
    });
  };

  var loadRepositoryIssues = function(){
    RepositoryIssues.getIssues($scope.username, $scope.reponame).success(function(data){
      $scope.issues = data;
    }).error(function(data){
      console.log(data);
    });
  };

  var loadRepositoryPullRequests = function(){
    RepositoryPullRequests.getPullRequests($scope.username, $scope.reponame).success(function(data){
      $scope.pullRequests = data;
    }).error(function(data){
      console.log(data);
    });
  };

  loadRepository();
  loadRepositoryIssues();
  loadRepositoryPullRequests();
});
