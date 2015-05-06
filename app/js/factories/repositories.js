app.factory('repositoriesFactory', function($http, $q){
    var service = {};
    
    service.call = function(){
        var deferred = $q.defer();
        
        $http({
            method: 'GET',
            url: 'https://api.github.com/orgs/Edools/repos'
        }).success(function(data){
            deferred.resolve(data);
        });
        
        return deferred.promise;
    }
    
    return service;
});