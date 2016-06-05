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
  var username = $routeParams.username;
  var reponame = $routeParams.reponame;

  var loadRepository = function(){
    Repository.getRepository(username, reponame).success(function(data){
      $scope.repo = data;
    }).error(function(data){
      console.log(data);
    });
  };

  var loadRepositoryIssues = function(){
    RepositoryIssues.getIssues(username, reponame).success(function(data){
      $scope.issues = data;
    }).error(function(data){
      console.log(data);
    });
  }

  var loadRepositoryPullRequests = function(){
    RepositoryPullRequests.getPullRequests(username, reponame).success(function(data){
      $scope.pullRequests = data;
    }).error(function(data){
      console.log(data);
    });
  }

  loadRepository();
  loadRepositoryIssues();
  loadRepositoryPullRequests();
});
