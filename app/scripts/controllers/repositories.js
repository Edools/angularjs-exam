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
  var loadRepository = function(){
    Repository.get({
      username: $routeParams.username, repo: $routeParams.reponame
    }).$promise.then(function(data){
      $scope.repo = data;
    }, function(error){
      console.log(error);
    });
  };

  var loadRepositoryIssues = function(){
    RepositoryIssues.get({
      username: $routeParams.username, repo: $routeParams.reponame
    }).$promise.then(function(data){
      $scope.issues = data;
    }, function(error){
      console.log(error);
    });
  };

  var loadRepositoryPullRequests = function(){
    RepositoryPullRequests.get({
      username: $routeParams.username, repo: $routeParams.reponame
    }).$promise.then(function(data){
      $scope.pullRequests = data;
    }, function(error){
      console.log(error);
    });
  };

  loadRepository();
  loadRepositoryIssues();
  loadRepositoryPullRequests();
});
