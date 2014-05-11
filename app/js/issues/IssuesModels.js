'use strict';



angular.module('myApp.issues.models', [])

.factory('IssuesModel', ['$resource', function($resource) {
    return $resource(URL_API+'/repos/:user/:repo/issues', {}, {
    	query: { method: 'GET', isArray: true }
    });
}])
.factory('IssuesCommentsModel', ['$resource', function($resource) {
    return $resource(URL_API+'/repos/:user/:repo/issues/:number/comments', {}, {
    	query: { method: 'GET', isArray: true }
    });
}]);