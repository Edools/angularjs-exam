'use strict';



angular.module('myApp.users.models', [])

.factory('UserRepositoriesModel', ['$resource', function($resource) {
    return $resource(URL_API+'/users/:user/repos', {}, {
    	query: { method: 'GET', isArray: true }
    });
}]);