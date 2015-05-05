var app = angular.module('testApp', ['ngRoute']);

app.factory('factoryT', function($http, $q){
    var service = {};
    
    service.call = function(){
        var deferred = $q.defer();
        
        $http({
            method: 'GET',
            url: 'https://api.github.com/gists/public'
        }).success(function(data){
            deferred.resolve(data);
        });
        
        return deferred.promise;
    }
    
    return service;
});

app.controller('ctrl', function($scope, factoryT){
    $scope.data = {};
    
    factoryT.call().then(function(data){
       $scope.data = data;
    });
});