'use strict';

/**
 * @ngdoc service
 * @name angularApp.Repository
 * @description
 * # Repository
 * Service in the angularApp.
 */
angular.module('angularApp')
.service('Repository', function ($http) {
  this.getRepository = function(username, repo) {
    return $http({
      method: 'GET',
      url: 'https://api.github.com/repos/' + username + '/' + repo
    });
  };
});
