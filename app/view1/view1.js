'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.factory('View1Srv', function($http) {
  var githubAPI = {};
  githubAPI.getRepos = function() {
    return $http({
      url: "https://api.github.com/search/repositories?q=angular"
    });
  }
  return githubAPI;
})

.controller('View1Ctrl', function($scope, View1Srv) {
  $scope.reposList = [];
  View1Srv.getRepos().success(function(response){
    $scope.reposList = response.items;
  });
})

;