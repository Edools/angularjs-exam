var app = angular.module('app', []);

var usuarioGit = 'angular';

app.controller('GitCtrl', ['$scope','github',function($scope, github){

    github.get().then(function(data){
        $scope.user = data.data;
    });

    github.followers().then(function(data){
        $scope.followers = data.data  
    });
    
    github.repo().then(function(data){
        $scope.repo = data.data  
    });
}]);

app.factory('github',['$http',function($http){
  var url             = 'https://api.github.com/users/' + usuarioGit;
  var follow          = url + "/followers"
    , repo            = url +"/repos"
    ;

  return {
    get: function(){
        return $http.get(url);
    },
    followers: function(){
        return $http.get(follow);
    },
    repo: function(){
        return $http.get(repo);
    }
  }
}]);