app.factory('repositoriesFactory', function($http, $q){
    var service = {};
    
    service.callRepos = function(org){
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: 'https://api.github.com/orgs/' + org + '/repos'
        }).success(function(data){
            deferred.resolve(data);
        }).error(function(){
            alert('Ops... Tivemos um problema, tente novamente')
        });
        
        return deferred.promise;
    }    

    service.getIssues = function(owner, repo) {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: 'https://api.github.com/repos/' + owner + '/' + repo + '/issues'
        }).success(function(data){
            deferred.resolve(data);
        }).error(function(){
            alert('Ops... Tivemos um problema, tente novamente');
        });

        return deferred.promise;

    }

    return service;
});