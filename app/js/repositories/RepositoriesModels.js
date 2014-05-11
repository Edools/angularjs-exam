'use strict';



angular.module('myApp.repositories.models', [])

.factory('RepositoriesModel', ['$resource', function($resource) {
    return $resource(URL_API+'/repositories', {}, {
    	query: { method: 'GET', isArray: true }
    });
}]);