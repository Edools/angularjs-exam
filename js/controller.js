var app = angular.module('app', []);
  
app.controller('Ctrl', ['$scope','github',function($scope, github){
  github.get().then(function(data){
    $scope.user = data.data;
    var strDate = $scope.user.created_at;
    $scope.array = strDate.split('-');
    var year = $scope.array[0],
        month = $scope.array[1];
    $scope.user.memberSince = month+'/'+year;
  });
  
  github.repos().then(function(data){
    $scope.repos = data.data
  });

  github.members().then(function(data) {
    $scope.members = data.data
  });
}]);

app.factory('github',['$http',function($http){
  var url = 'https://api.github.com/orgs/edools',
      repo = "https://api.github.com/orgs/edools/repos",
      member = "https://api.github.com/orgs/Edools/public_members";
  return {
    get: function(){
      return $http.get(url);
    },
    repos: function(){
      return $http.get(repo);
    },
    members: function(){
      return $http.get(member);
    }
  }
}]);